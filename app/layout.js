import Footer from "@/components/footer/Footer";
import "./globals.css";
import MainHeader from "@/components/header/MainHeader";
import SubHeader from "@/components/header/SubHeader";

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
        <div>{children}</div>
        <div className="mt-8">
          <Footer />
        </div>
      </body>
    </html>
  );
}
