import Header from "@/components/Header";
import "bootstrap/dist/css/bootstrap.css";
import "../../public/css/header.css";
import "../../public/css/main.css";
import "../../public/css/home.css";
import "../../public/css/responsive.css";
import Footer from "@/components/Footer";

import ReduxProvider from "@/redux/ReduxProvider";

export const metadata = {
  title: "CollegeTSA",
  description:
    "Why it is important to choose the Right College for your professional carrier?",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        ></link>
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
