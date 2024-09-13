import Image from "next/image";

export const metadata = {
  title:
    "Aboard | College TSA - Find Your Best College, Course and Career Path",
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
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}/aboard`),
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_API_URL}/aboard`,
    languages: {
      "en-US": `${process.env.NEXT_PUBLIC_API_URL}/aboard/en-US`,
      "de-DE": `${process.env.NEXT_PUBLIC_API_URL}/aboard/de-DE`,
    },
  },
  openGraph: {
    title:
      "Aboard | College TSA - Find Your Best College, Course and Career Path",
    description:
      "College TSA helps you find the best colleges, courses, and career opportunities. Explore top institutions, compare programs, and get expert advice to guide your academic journey and future career. Start shaping your success today!",
    url: `${process.env.NEXT_PUBLIC_API_URL}/aboard`,
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
      "Aboard | College TSA - Find Your Best College, Course and Career Path",
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
    <div
      style={{ display: "flex", justifyContent: "center" }}
      className="mb-30">
      <div className="content-page">
        <h2>Why Study MBBS Abroad?</h2>
        <p>TSA Services gives you several reasons to Study MBBS Abroad</p>
        <div className="why-aboard">
          <div className="text-center">
            <h4>Low Tuition Fees</h4>
            <Image
              src="/images/aboard/low-price.png"
              width={75}
              height={75}
              alt=""
            />
            <p>
              Studying MBBS abroad doesn't require paying a huge amount of fees.
              When you apply via COLLEGETSA SERVICES, you can experience a low
              tuition fee structure and minimal living cost
            </p>
          </div>
          <div className="text-center">
            <h4>Top Medical Universities</h4>
            <Image
              src="/images/aboard/university.png"
              width={75}
              height={75}
              alt=""
            />
            <p>
              Studying MBBS abroad doesn't require paying a huge amount of fees.
              When you apply via COLLEGETSA SERVICES, you can experience a low
              tuition fee structure and minimal living cost
            </p>
          </div>
          <div className="text-center">
            <h4>No Entrance Exam</h4>
            <Image
              src="/images/aboard/exam.png"
              width={75}
              height={75}
              alt=""
            />
            <p>
              You don't have to worry about entrance examinations while applying
              for further studies abroad. If you meet the eligibility criteria,
              you can apply for the course.
            </p>
          </div>
          <div className="text-center">
            <h4>NMC/WHO Approved</h4>
            <Image
              src="/images/aboard/world.png"
              width={75}
              height={75}
              alt=""
            />
            <p>
              When you opt for higher studies abroad, try to get admitted to
              universities approved by WHO or NMC. You need to complete your
              course from any authorized university.
            </p>
          </div>
          <div className="text-center">
            <h4>No Donation</h4>
            <Image
              src="/images/aboard/cash.png"
              width={75}
              height={75}
              alt=""
            />
            <p>
              There will be no donation or hidden charges except for the fee
              structure when you apply for MBBS courses abroad
            </p>
          </div>
          <div className="text-center">
            <h4>Study in English medium</h4>
            <Image src="/images/aboard/eng.png" width={75} height={75} alt="" />
            <p>
              Studying MBBS abroad doesn't require paying a huge amount of fees.
              When you apply via TSA SERVICES , you can experience a low tuition
              fee structure and minimal living cost
            </p>
          </div>
        </div>
        <h3>Why should you contact us?</h3>
        <p>
          When you come to TSA SERVICES, we'll give you multiple reasons to
          consult our counsellors for MBBS abroad. Without expert guidance you
          may get puzzled. Therefore, consult our faculties and pave the way for
          your future.
        </p>
        <h3>Book your University</h3>
        <p>
          We are connected to several NMC-approved universities and guide our
          candidates to get admission. Our team prepares a list of available
          universities with experienced teaching staff and years of reputation.
        </p>
        <h3>Career Planning</h3>
        <p>
          As you finish your MBBS course, we guide you ahead for further
          studies. You can consult our experienced mentors regarding
          post-graduation courses, and they will help you with apt solutions.
        </p>
        <h3>Financial Advice</h3>
        <p>
          Studying abroad sounds nice until parents face a financial crisis. So
          we are here to help you manage all the tuition fees, from food
          expenses to air tickets. So contact TSA SERVICES and do not compromise
          your dreams.
        </p>
        <h3>Customised Solutions</h3>
        <p>
          We offer customised solutions for each student. When you come to us,
          our faculty will check your past educational details and scorecard and
          find out the right universities. From documentation to accommodation,
          we will guide you thoroughly.
        </p>
        <h3>Visa and Admission</h3>
        <p>
          Studying abroad requires you to get a visa. At TSA SERVICES we assist
          you with the course details and guide you to apply for a visa and
          prepare the related documents.
        </p>
        <h3>Accommodations</h3>
        <p>
          Not surprisingly, travel and accommodations are two significant
          concerns when studying abroad. If you contact us, we will help you
          book flight tickets, find suitable accommodations near the university.
        </p>
        <h2>#1 MBBS Education Consultants</h2>
        <p>
          Contact us unhesitant as we are perhaps the best MBBS educational
          counselors that you can ever meet. Our honest efforts, valuable advice
          and fair guidelines will make your dreams come true!
        </p>
        <ol>
          <li>Most trusted abroad consultancy firm in India.</li>
          <li>
            With over 10 years of experience we provide the best educational
            solutions.
          </li>
          <li>We offer an affordable MBBS education and stay.</li>
          <li>Read our testimonials and clear your doubts, if any.</li>
          <li>
            Our active associates will guide you thoroughly to study MBBS
            abroad.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Page;
