import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import "@/styles/globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Thyago Martins — Midlevel Full Stack Engineer",
  description:
    "Computer Engineer with 4+ years building scalable systems for national and international companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" data-lang="en" suppressHydrationWarning>
      <body className={plusJakarta.className}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
