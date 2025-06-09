import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/providers/QueryProvider";

const hyliaSerif = localFont({
  src: "../../public/fonts/HyliaSerifBeta-Regular.otf",
  variable: "--font-hylia-serif",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gondor Chic",
  description:
    "Boutique en ligne d'artefacts et de trésors de la Terre du Milieu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${hyliaSerif.variable}`}>
      <body className={inter.className}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
