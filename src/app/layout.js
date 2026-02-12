import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Providers from "@/components/Provider/Providers";
// import TrackingPixel from "@/components/trackingpixel/TrackingPixel";
import "@/styles/globals.css";

export const dynamic = "force-dynamic"

export const metadata = {
  title: "My App",
  description: "Frontend App Router",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          // <TrackingPixel />
          <div className="overallMar">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
