import Footer from "@/components/footer/Footer";
import "./globals.css";
import MainHeader from "@/components/header/MainHeader";
import SubHeader from "@/components/header/SubHeader";
import Script from "next/script";
import { WebVitals } from "@/components/web-vitals";

export const metadata = {
  title:
    "Dhamika.com - Connecting Global buyers with Indian Suppliers of Industrial and Electrical Goods",
  description:
    "Connecting Global buyers with Indian Suppliers of Industrial and Electrical Goods",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="fixed top-0 right-0 left-0 h-20 bg-white z-50 shadow">
          <MainHeader />
        </div>
        <div className="mt-20">
          <SubHeader />
        </div>
        <div className="px-4 md:px-8">{children}</div>
        <div className="mt-8">
          <Footer />
        </div>

        {/* Google Analytics Scripts */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-9DH6SJ5L6M"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9DH6SJ5L6M', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Google Analytics scripts end */}

        {/* Report Web Vitals */}
        <WebVitals />
        {/* Report web vitals end */}
      </body>
    </html>
  );
}
