import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShopKG - Электрондук коммерция платформасы",
  description: "Россия жана Кыргызстан үчүн электрондук коммерция платформасы",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
