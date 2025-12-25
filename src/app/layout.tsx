import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Curate Seoul | Seoul Travel, smarter",
  description: "Curate Seoul helps you enjoy Seoul more smartly with expert curation and medical tourism services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
