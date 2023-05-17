import {
  Bai_Jamjuree as BaiJamjuree,
  Roboto_Flex as Roboto,
} from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });
const baijamjuree = BaiJamjuree({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-baijamjuree",
});

export const metadata = {
  title: "NLW Spacetime",
  description: "Compartilhe seus momentos",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <body className={`${roboto.variable} ${baijamjuree.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
