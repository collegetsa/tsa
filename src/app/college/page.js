import dynamic from "next/dynamic";
const CollegeList = dynamic(() => import("@/frontend/section/CollegeList"));

export const metadata = {
  title: "College | College TSA - Find Your best Colleges",
  description:
    "College TSA helps you find the best colleges, courses, and career opportunities. Explore top institutions, compare programs, and get expert advice to guide your academic journey and future career. Start shaping your success today!",
  keywords: [
    "collegetsa",
    `admission ${new Date().getFullYear()}-${new Date().getFullYear() + 1}`,
    "college admissions",
    `best colleges in ${new Date().getFullYear()}-${
      new Date().getFullYear() + 1
    }`,
    "best colleges in tamilnadu",
    "best engineering colleges in tamilnadu",
    "best medical colleges in tamilnadu",
    "best law colleges in tamilnadu",
    "best mba colleges in tamilnadu",
    "best nursing colleges in tamilnadu",
    "best aeronautical engineering colleges in tamilnadu",
    "best engineering colleges in tamilnadu with low fees",
    "best agriculture college in tamilnadu",
    "best architecture colleges in tamilnadu",
    "best arts colleges in tamilnadu",
    "best marine colleges in tamilnadu",
    "best hotel management colleges in tamilnadu",
  ],
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
    title:
      "College | College TSA - Find Your best College, Course and Career Path",
    description:
      "College TSA helps you find the best colleges, courses, and career opportunities. Explore top institutions, compare programs, and get expert advice to guide your academic journey and future career. Start shaping your success today!",
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
    site: "collegetsa.com",
    title:
      "College | College TSA - Find Your best College, Course and Career Path",
    description:
      "College TSA helps you find the best colleges, courses, and career opportunities. Explore top institutions, compare programs, and get expert advice to guide your academic journey and future career. Start shaping your success today!",
    creator: "@collegetsa",
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

const getCollegeList = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/college`,
    {
      cache: "no-store",
    }
  );
  if (response.ok) {
    return response.json();
  }
};

export default async function page() {
  const CollegeLists = await getCollegeList();
  return <CollegeList CollegeLists={CollegeLists} />;
}