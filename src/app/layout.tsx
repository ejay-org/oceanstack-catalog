import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MSP 오픈소스 카탈로그",
  description: "MSP 통합운영플랫폼을 위한 오픈소스 카탈로그",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
