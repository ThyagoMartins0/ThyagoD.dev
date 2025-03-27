import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from "./context/ThemeContext";
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { LanguageProvider } from './i18n/LanguageContext';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Thyago Ramos",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <LanguageProvider>
            <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 1000 }}>
              <LanguageSelector />
            </div>
            {children}
            <ScrollToTop />
            <Analytics /> 
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
