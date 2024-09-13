export const metadata = {
  title:
    "Privacy and Policy | College TSA - Find Your Best College, Course and Career Path",
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
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}/privacy-policy`),
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_API_URL}/privacy-policy`,
    languages: {
      "en-US": `${process.env.NEXT_PUBLIC_API_URL}/privacy-policy/en-US`,
      "de-DE": `${process.env.NEXT_PUBLIC_API_URL}/privacy-policy/de-DE`,
    },
  },
  openGraph: {
    title:
      "Privacy and Policy | College TSA - Find Your Best College, Course and Career Path",
    description:
      "College TSA helps you find the best colleges, courses, and career opportunities. Explore top institutions, compare programs, and get expert advice to guide your academic journey and future career. Start shaping your success today!",
    url: `${process.env.NEXT_PUBLIC_API_URL}/privacy-policy`,
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
      "Privacy and Policy | College TSA - Find Your Best College, Course and Career Path",
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

const Page = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="content-page">
        <h2>Privacy Policy</h2>
        <p>
          Thank you for visiting collegetsa.com. We understand the importance of
          privacy and are committed to protecting the personal information of
          our users. This Privacy Policy outlines how we collect, use, disclose,
          and safeguard your information when you visit our website.
        </p>
        <p>
          By using CollegeTSA, you consent to the data practices described in
          this policy. Please review this Privacy Policy carefully to understand
          our practices regarding your personal data and how we will treat it.
        </p>
        <h3>Information We Collect</h3>
        <p>
          When you visit CollegeTSA, we may collect both personally identifiable
          information and non-personally identifiable information. PII may
          include your name, email address, phone number, and other information
          that can be used to identify or contact you. Non-PII may include
          demographic information, browser types, IP addresses, and other
          anonymous data.
        </p>
        <p>
          We collect information in several ways, including when you register on
          our site, subscribe to our newsletter, fill out a form, or interact
          with our services.
        </p>
        <h3>Use of Information</h3>
        <p>
          We use the information we collect for various purposes, including:
        </p>
        <ul>
          <li>Providing and maintaining our services.</li>
          <li>
            Personalizing your experience and delivering customized content.
          </li>
          <li>
            Communicating with you, including responding to inquiries and
            providing updates.
          </li>
          <li>Analyzing trends and improving our website.</li>
          <li>Protecting against fraud and ensuring a secure environment.</li>
        </ul>
        <h3>Disclosure of Information</h3>
        <p>
          We may share your information with third parties in the following
          circumstances:
        </p>
        <ul>
          <li>With your consent or at your direction.</li>
          <li>
            To comply with legal obligations or respond to lawful requests.
          </li>
          <li>
            To protect our rights, property, or safety, as well as those of
            others.
          </li>
          <li>In connection with a merger, acquisition, or sale of assets.</li>
        </ul>
        <p>
          We do not sell, rent, or trade your personal information to third
          parties for marketing purposes.
        </p>
        <h3>Cookies and Tracking Technologies</h3>
        <p>
          CollegeTSA uses cookies and similar tracking technologies to enhance
          your browsing experience and collect information about how you use our
          site. You can manage your cookie preferences through your browser
          settings.
        </p>
        <h3>Security Measures</h3>
        <p>
          We take reasonable measures to protect your personal information from
          unauthorized access, disclosure, alteration, or destruction. However,
          no method of transmission over the internet or electronic storage is
          100% secure, and we cannot guarantee absolute security.
        </p>
        <h3>Links to Other Websites</h3>
        <p>
          Our website may contain links to third-party sites that are not
          operated by us. We are not responsible for the content or privacy
          practices of these sites and encourage you to review their privacy
          policies.
        </p>
        <h3>Contact Us</h3>
        <p>
          If you have any questions or concerns about this Privacy Policy or our
          practices, please contact us at{" "}
          <strong>collegetsainfo@gmail.com</strong>
        </p>
      </div>
    </div>
  );
};

export default Page;
