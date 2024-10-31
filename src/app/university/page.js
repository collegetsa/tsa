import Table from "@/frontend/section/Table";

const UniversityList = [
  "Anna University",
  "Vellore Institute of Technology",
  "SRM Institute of Science and Technology",
  "SASTRA Deemed University",
  "Satyabama Institute of Science and Technology Business Incubator",
  "University of Madras",
  "Annamalai University",
  "Kalasalingam Academy of Research and Education",
  "Indian Institute Of Technology-Madras (IIT-Madras)",
  "Karunya Institute of Technology and Sciences (Deemed University)",
  "Hindustan Institute of Technology & Science",
  "B.S.Abdur Rahman Crescent Institute Of Science And Technology",
  "National Institute of Technology Tiruchirappalli",
  "Sri Ramachandra Institute of Higher Education and Research",
  "Amrita Vishwa Vidyapeetham, Coimbatore campus",
  "Alagappa University",
  "Avinashilingam University",
  "Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya (SCSVMV)",
  "Bharathiar University",
  "Bharathidasan University",
  "Tamil Nadu Agricultural University",
  "Vel Tech Rangarajan Dr.Sagunthala R&D Institute of Science and Technology",
  "Dr. M.G.R. Educational And Research Institute university",
  "Central University of Tamil Nadu",
  "The Gandhigram Rural Institute-Deemed to be University",
  "Saveetha University",
  "Madurai Kamaraj University",
  "Periyar University",
  "Bharath Institute of Higher Education and Research",
  "Tamil Nadu Veterinary and Animal Sciences University (TANUVAS)",
  "Manonmaniam Sundaranar University",
  "Tamil Nadu Dr. Ambedkar Law University",
  "Karpagam Academy of Higher Education",
  "Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram",
  "Vinayaka Missions Research Foundation",
  "PRIST Deemed to be University",
  "PSG College Of Technology",
  "Amet University",
  "Tamil University",
  "Tamil Nadu Teachers Education University",
  "Chennai Mathematical Institute",
  "Rajiv Gandhi National Institute of Youth Development",
  "Mother Teresa Women's University",
  "Meenakshi Academy of Higher Education & Research (MAHER)",
  "Thiruvalluvar University",
  "Tamil Nadu Physical Education and Sports University",
  "Sri Sivasubramaniya Nadar College of Engineering",
];

const myDescription = `Discover the top universities of ${new Date().getFullYear()} with our expertly curated lists. Explore rankings, reviews, and insights to find the best higher education institutions for your academic goals.`;
export const metadata = {
  title: `Top University Lists in ${new Date().getFullYear()} | College TSA`,
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
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}/university`),
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_API_URL}/university`,
    languages: {
      "en-US": `${process.env.NEXT_PUBLIC_API_URL}/university/en-US`,
      "de-DE": `${process.env.NEXT_PUBLIC_API_URL}/university/de-DE`,
    },
  },
  openGraph: {
    title: `Top University Lists in ${new Date().getFullYear()} | College TSA`,
    description: myDescription,
    url: `${process.env.NEXT_PUBLIC_API_URL}/university`,
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
    title: `Top University Lists in ${new Date().getFullYear()} | College TSA`,
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
  return <Table />;
};

export default Page;
