import "../../public/css/header.css";
import "../../public/css/main.css";
import "../../public/css/layout.css";
import "../../public/css/responsive.css";
import ReduxProvider from "@/frontend/redux/ReduxProvider";
import dynamic from "next/dynamic";
import { CookiesProvider } from "next-client-cookies/server";

const Header = dynamic(() => import("@/frontend/section/Header"));
const Footer = dynamic(() => import("@/frontend/section/Footer"));

export const metadata = {
  title: "College TSA - Find Your Best College, Course and Career Path",
  description:
    "College TSA helps you find the best colleges, courses, and career opportunities. Explore top institutions, compare programs, and get expert advice to guide your academic journey and future career. Start shaping your success today!",
  keywords: [
    "collegetsa",
    "collegetsa.com",
    "admission",
    "cutoff marks",
    "college",
    "course",
    `admission ${new Date().getFullYear()}-${new Date().getFullYear() + 1}`,
    "college admissions",
    "top colleges in tamilnadu",
    "career guidance",
    "how to find the best college for my career",
    "career advice for college students",
    "how to choose the right college course",
    `best courses in ${new Date().getFullYear()}-${
      new Date().getFullYear() + 1
    }`,
    `best colleges in ${new Date().getFullYear()}-${
      new Date().getFullYear() + 1
    }`,
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
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}`),
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_API_URL}`,
    languages: {
      "en-US": `${process.env.NEXT_PUBLIC_API_URL}/en-US`,
      "de-DE": `${process.env.NEXT_PUBLIC_API_URL}/de-DE`,
    },
  },
  openGraph: {
    title: "College TSA - Find Your Best College, Course and Career Path",
    description:
      "College TSA helps you find the best colleges, courses, and career opportunities. Explore top institutions, compare programs, and get expert advice to guide your academic journey and future career. Start shaping your success today!",
    url: `${process.env.NEXT_PUBLIC_API_URL}`,
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
    title: "College TSA - Find Your Best College, Course and Career Path",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </head>
      <body>
        <CookiesProvider>
          <ReduxProvider>
            <Header />
            {children}
            <Footer />
          </ReduxProvider>
        </CookiesProvider>
      </body>
    </html>
  );
}