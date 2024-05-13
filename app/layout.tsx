import type { Metadata } from "next";
import { Outfit, Caveat } from "next/font/google";
import "./globals.css";

export const outfit = Outfit({ 
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-outfit",
});

export const caveat = Caveat({ 
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-caveat",
 });

export const metadata: Metadata = {
  title: "Docto-Rdv | Prise de Rendez-vous Médical en Ligne",
  description: "Trouvez et prenez rendez-vous en ligne avec des praticiens de santé sur Docto-Rdv. Consultations médicales simplifiées avec une large gamme de spécialités disponibles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${outfit.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
