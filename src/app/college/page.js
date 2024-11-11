import dynamic from "next/dynamic";
const CollegeList = dynamic(() => import("@/frontend/section/CollegeList"));

const myTitle = `List of Colleges in ${new Date().getFullYear()} | College TSA - Find Your best Colleges`;
const myDescription =
  "College TSA helps you find the best colleges, courses, and career opportunities. Explore top institutions, compare programs, and get expert advice to guide your academic journey and future career. Start shaping your success today!";

export const metadata = {
  title: myTitle,
  description: myDescription,
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}/college`),
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_API_URL}/college`,
    languages: {
      "en-US": `${process.env.NEXT_PUBLIC_API_URL}/college/en-US`,
      "de-DE": `${process.env.NEXT_PUBLIC_API_URL}/college/de-DE`,
    },
  },
  openGraph: {
    title: myTitle,
    description: myDescription,
    url: `${process.env.NEXT_PUBLIC_API_URL}/college`,
    siteName: "collegetsa.com",
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_API_URL}/images/logo.png`,
        secureUrl: `${process.env.NEXT_PUBLIC_API_URL}/images/logo.png`,
        width: 50,
        height: 50,
        alt: "Preview image for College TSA",
      },
    ],
    locale: "en_US",
    authors: ["College TSA team"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@collegetsainfo",
    title: myTitle,
    description: myDescription,
    creator: "@collegetsainfo",
    images: {
      url: `${process.env.NEXT_PUBLIC_API_URL}/images/logo.png`,
      alt: "Preview image for College TSA",
    },
  },
  icons: {
    icon: `${process.env.NEXT_PUBLIC_API_URL}/favicon.ico`,
    shortcut: `${process.env.NEXT_PUBLIC_API_URL}/images/logo.png`,
    apple: `${process.env.NEXT_PUBLIC_API_URL}/images/logo.png`,
    other: {
      rel: "apple-touch-icon-precomposed",
      url: `${process.env.NEXT_PUBLIC_API_URL}/images/logo.png`,
    },
  },
  category: "Education",
};

const getCollegeList = async (searchParams) => {
  const search = searchParams?.search || "";
  const collegetype = searchParams?.collegetype || "";
  const location = searchParams?.location || "";
  const ownership = searchParams?.ownership || "";
  const university = searchParams?.university || "";

  const page = searchParams?.page || "";
  const query = `type=view-list&search=${search}&collegetype=${collegetype}&location=${location}&ownership=${ownership}&university=${university}&page=${page}`;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/college?${query}`,
    {
      cache: "no-store",
    }
  );
  if (response.ok) {
    return response.json();
  }
};

const getCollegesCount = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/college?type=get-length`,
    {
      cache: "no-store",
    }
  );
  if (response.ok) {
    return response.json();
  }
};

export default async function page({ searchParams }) {
  const CollegeLists = await getCollegeList(searchParams);
  const totalColleges = await getCollegesCount(searchParams);
  console.log("COUNT", totalColleges[0]?.totalCount);
  return (
    <CollegeList
      CollegeLists={CollegeLists}
      searchParams={searchParams}
      totalColleges={totalColleges[0]?.totalCount}
    />
  );
}