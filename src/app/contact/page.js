import Image from "next/image";

const myTitle =
  "Contact Us | College TSA - Find Your Best College, Course and Career Path";
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
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}/contact`),
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_API_URL}/contact`,
    languages: {
      "en-US": `${process.env.NEXT_PUBLIC_API_URL}/contact/en-US`,
      "de-DE": `${process.env.NEXT_PUBLIC_API_URL}/contact/de-DE`,
    },
  },
  openGraph: {
    title: myTitle,
    description: myDescription,
    url: `${process.env.NEXT_PUBLIC_API_URL}/contact`,
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

const Page = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center" }}
      className="mb-30">
      <div className="content-page">
        <h2>T.S.A SERVICES EDUCATIONAL & CAREER GUIDANCE</h2>
        <p>
          T.S.A Service Educational and Career Guidance COLLEGE ADMISSION
          GUIDANCE We are established the educational consultancy since 2015.We
          are the no.1 educational consultant in TIRUVANNAMALAI, Arani, ambur,
          hosur, chennai, Salem, vellore and dharmapuri. For the past 6 years we
          are admitted more than hundreds of students in various departments
          like medical, engineering, dental, arts and science and law,
          management, information technology, agriculture and research programs.
          We also help the students and job seekers getting placement in various
          top MNC?s in india and abroad. All these services are done free of
          cost. No service charge for students. We admit students with just pass
          mark in +2 exams with very low pakage in various top colleges.
        </p>
        <p>
          Educational counseling / spot admission in various courses/
          placements/ carrier guidance/ entrance coaching in various competitive
          exams/ tution for +2 students.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Image src="/images/ceo.webp" width={200} height={200} alt="ceo" />
          <h4>Aravind Thennarasu - CEO of CollegeTSA</h4>
        </div>
        <h3>Our Services include:</h3>
        <ul>
          <li>
            Free Educational Counseling to Students & Parents regarding all
            courses.
          </li>
          <li>We Guide & Prefer recognised & Well known Institutions only.</li>
          <li>
            We have Direct Authorisation of Reputed Colleges & Universities
          </li>
          <li>Seat Reservations Facility</li>
          <li>Free Campus visit</li>
          <li>
            Separate Hostel Facilities for both Boys & Girls with South Indian
            Dishes
          </li>
          <li>Well Qualified & Experienced Faculty Members.</li>
          <li>Career counseling</li>
          <li>Career Mapping.</li>
          <li>Physcometric test.</li>
          <li>Intelligence Test.etc by Expert counsellor.</li>
        </ul>
        <h3>Main Office Address</h3>
        <p>
          No. 23, Arcot Road, Mangamaram Bus Stop, Arani Tiruvannamalai
          District, Tamilnadu 632301, India
        </p>
        <h3>Office Address: 1</h3>
        <p>NO. 86/28a-18, Salem Main Road, Seeragapadi, Salem 636308</p>
        <h3>Office Address: 2</h3>
        <p>
          NO.278 ,Maniya Kollai Street, Santhavasal, Polur Taluk Tiruvannamalai
          District, Tamilnadu 606905, India
        </p>
        <strong>Branches: Chennai, Hosur, Dharmapuri, Ranipet, Salem</strong>
        <div className="social-group mb-15 mt-30">
          <a href="https://www.facebook.com/Tsaservices" target="_blank">
            <Image
              src="/images/facebook.svg"
              alt="telegram-collegetsa"
              title="telegram-collegetsa"
              width={20}
              height={20}
            />
          </a>
          <a href="https://t.me/tsaservices" target="_blank">
            <Image
              src="/images/telegram.svg"
              alt="telegram-collegetsa"
              title="telegram-collegetsa"
              width={20}
              height={20}
            />
          </a>
          <a
            href="https://www.youtube.com/@TSASERVICES/featured"
            target="_blank">
            <Image
              src="/images/youtube.svg"
              alt="youtube-collegetsa"
              title="youtube-collegetsa"
              width={20}
              height={20}
            />
          </a>
          <a
            href="https://www.instagram.com/tsa_services_education_gudie?igsh=MTluN25yN2E0MDlzZg=="
            target="_blank">
            <Image
              src="/images/instagram.svg"
              alt="instagram-collegetsa"
              title="instagram-collegetsa"
              width={20}
              height={20}
            />
          </a>
          <a href="https://wa.me/qr/XAKKC4YOZ5OBG1" target="_blank">
            <Image
              src="/images/whatsapp.svg"
              alt="whatsapp-collegetsa"
              title="whatsapp-collegetsa"
              width={20}
              height={20}
            />
          </a>
        </div>
        <div>
          <p
            className="mr-30"
            style={{ display: "flex", alignItems: "center" }}>
            <a href="tel:9677869617">
              <span className="mr-10">
                <Image
                  src="/images/call.png"
                  width={20}
                  height={20}
                  alt="collegetsa-call"
                />
              </span>
              <span className="call-text">+91 9677869617</span>
            </a>
          </p>
          <p style={{ display: "flex", alignItems: "center" }}>
            <a href="mailto:collegetsainfo@gmail.com">
              <span className="mr-10">
                <Image
                  src="/images/mail.svg"
                  width={20}
                  height={20}
                  alt="collegetsa-email"
                />
              </span>
              <span className="call-text">collegetsainfo@gmail.com</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;