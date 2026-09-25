import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import FloatingActionButtons from "@/components/layout/FloatingActionButtons";
import ScrollToTop from "@/components/layout/ScrollToTop";

export const metadata: Metadata = {
  title: "AGTRS IDART PRIVATE LIMITED | LPG Safety, Pipelines & Engineering Solutions",
  description:
    "AGTRS IDART PRIVATE LIMITED (IDART) is South India's premier enterprise for LPG Mandatory Inspection, Copper Gas Pipeline Installation, Startup Solutions, Roof Trusses & Fire Safety. Headquartered in Coimbatore, Tamil Nadu.",
  keywords: [
    "AGTRS IDART",
    "IDART Coimbatore",
    "LPG Mandatory Inspection",
    "LPG Gas Pipeline Installation",
    "LPG Pipeline South India",
    "LPG Safety Inspection",
    "Gas Pipeline Installation Coimbatore",
    "LPG Pipeline Installation Tamil Nadu",
    "Startup Loan Solutions",
    "Roof Truss Solutions",
    "Fire Safety Services",
    "LPG Distributor Services",
    "S. Gowtham Kumar"
  ],
  authors: [{ name: "AGTRS IDART PRIVATE LIMITED" }],
  openGraph: {
    title: "AGTRS IDART PRIVATE LIMITED | South India's Energy Safety & Engineering Leader",
    description:
      "Bringing safe flames to every home across South India. 457+ Branches, 482+ Field Engineers, 3687+ LPG Distributors Served.",
    type: "website",
    locale: "en_IN"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#060D17] text-slate-100 antialiased font-sans selection:bg-orange-500 selection:text-white">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <FloatingActionButtons />
        <ScrollToTop />
      </body>
    </html>
  );
}
