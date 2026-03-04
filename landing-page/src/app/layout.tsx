import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TalentScope | Yetenek Değerlendirme Platformu",
  description:
    "Doğru adayı bulmanın en akıllı yolu. AI destekli yetenek testleri ile işe alım sürecinizi dönüştürün.",
  keywords: ["yetenek testi", "işe alım", "assessment", "değerlendirme", "HR"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
