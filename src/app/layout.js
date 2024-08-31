import Header from "../frontend/section/Header";
import "../../public/css/header.css";
import "../../public/css/main.css";
import "../../public/css/layout.css";
import "../../public/css/responsive.css";
import ReduxProvider from "@/frontend/redux/ReduxProvider";
import Footer from "@/frontend/section/Footer";

export const metadata = {
  title: "College TSA",
  description:
    "Find your best college, course, exams & carrer using collegetsa.com",
  keywords: [
    "collegetsa.com",
    "collegetsa",
    "tsa",
    "admission",
    "college",
    "course",
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
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_API_URL}`,
    languages: {
      "en-US": `${process.env.NEXT_PUBLIC_API_URL}`,
      "de-DE": `${process.env.NEXT_PUBLIC_API_URL}`,
    },
  },
  openGraph: {
    title: "College TSA",
    description:
      "Find your best college, course, exams & carrer using collegetsa.com",
    url: `${process.env.NEXT_PUBLIC_API_URL}`,
    siteName: "collegetsa.com",
    locale: "en_US",
    type: "article",
    authors: ["collegetsainfo"],
  },
  twitter: {
    card: "summary_large_image",
    site: "collegetsa.com",
    title: "College TSA",
    description:
      "Find your best college, course, exams & carrer using collegetsa.com",
    creator: "collegetsa team",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          href="https://fonts.googleapis.com/css?family=Inter"
          rel="stylesheet"
        />
      </head>
      <body>
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
