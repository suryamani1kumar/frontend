import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import NewLetter from "@/components/Homepage/NewLetter/NewLetter";
import Providers from "@/components/Provider/Providers";
import "@/styles/globals.css";

export const dynamic = "force-dynamic";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
