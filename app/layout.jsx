import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "JC PRESTIGE HOTEL",
  description: "Hotel jc prestige bastos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-light-yellow">
        <Navbar className="" />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
