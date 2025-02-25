import dynamic from "next/dynamic";
const ViewCollege = dynamic(() => import("@/frontend/section/ViewCollege"));

const getCollege = async (id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/college?pageUrl=${id}`,
    { cache: "no-store" }
  );
  if (response.ok) {
    return response.json();
  }
};

export async function generateMetadata({ params }) {
  const _data = await getCollege(params?.id);
  const data = _data[0];
  return {
    title: data?.collegeData?.collegeName,
    description: data?.collegeData?.content?.slice(0, 159),
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
    metadataBase: new URL(
      `${process.env.NEXT_PUBLIC_API_URL}/college/${data?.pageUrl}`
    ),
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_API_URL}/college/${data?.pageUrl}`,
      languages: {
        "en-US": `${process.env.NEXT_PUBLIC_API_URL}/college/${data?.pageUrl}/en-US`,
        "de-DE": `${process.env.NEXT_PUBLIC_API_URL}/college/${data?.pageUrl}/de-DE`,
      },
    },
    openGraph: {
      title: data?.collegeData?.collegeName,
      description: data?.collegeData?.content?.slice(0, 159),
      url: `${process.env.NEXT_PUBLIC_API_URL}/college/${data?.pageUrl}`,
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
      title: data?.collegeData?.collegeName,
      description: data?.collegeData?.content?.slice(0, 159),
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
}

export default async function page({ params }) {
  const College = await getCollege(params.id);
  return <ViewCollege data={College[0]?.collegeData} />;
}