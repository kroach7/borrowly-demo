import { Baloo_2 } from "next/font/google";
import { Header, Footer } from "@src/components/";
import "./globals.css";

const baloo = Baloo_2({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={baloo.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export const dynamic = "force-dynamic";
