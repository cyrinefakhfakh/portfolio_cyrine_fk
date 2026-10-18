import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cyrine-ai-lab.vercel.app"),
  title: "CYRINE AI LAB — Data Science & Generative AI Portfolio | Cyrine Fakhfakh",
  description: "Official portfolio of Cyrine Fakhfakh, Master in Artificial Intelligence, Data & Agentic Systems (AIDA) at Université Paris-Dauphine PSL. Featuring the GenBI Platform, Breast Cancer Diagnostic Tool, and Enterprise Data Architectures.",
  keywords: [
    "Cyrine Fakhfakh",
    "Data Science",
    "Machine Learning",
    "Generative AI",
    "Big Data",
    "Paris-Dauphine PSL",
    "AIDA",
    "Model Context Protocol",
    "FastAPI",
    "SQL Server",
    "Power BI",
    "PFE Stage",
    "Portfolio"
  ],
  authors: [{ name: "Cyrine Fakhfakh", url: "https://github.com/cyrinefakhfakh" }],
  creator: "Cyrine Fakhfakh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/cyrinefakhfakh",
    title: "CYRINE AI LAB — Turning Data Into Intelligence",
    description: "Explore Cyrine Fakhfakh's interactive project constellation, generative BI platform, and explainable AI research.",
    siteName: "CYRINE AI LAB",
    images: [
      {
        url: "/portrait-transparent.png",
        width: 800,
        height: 1000,
        alt: "Cyrine Fakhfakh — CYRINE AI LAB",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CYRINE AI LAB — Data Science & Generative AI Portfolio",
    description: "Turning Data Into Intelligence. Master AIDA student at Université Paris-Dauphine PSL.",
    images: ["/portrait-transparent.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#060913] text-[#f1f5f9] antialiased min-h-screen flex flex-col selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
