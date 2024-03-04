import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Texpanse deom",
  description: "Texpanse is a modern acronym that highlights titles or keywords its changes per 3 sec specific text colors per letter and randomly characters upper case to lowercase.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
