import { Lato } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import NewLetter from "@/components/Homepage/NewLetter/NewLetter";
import Providers from "@/components/Provider/Providers";
import "@/styles/globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
});

export const dynamic = "force-dynamic";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3067677848123659"
          crossorigin="anonymous"
          strategy="afterInteractive"
        ></script>
      </head>

      <body className={lato.className}>
        <Providers>
          <Header />
          <div className="overallMar">{children}</div>
          <NewLetter />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
