import "./globals.css";
import Header from './COMPONENTS/Header';
import Footer from './COMPONENTS/Footer';

import localFont from 'next/font/local'
 
// Font files can be colocated inside of `app`
const Bahnschrift = localFont({
  src: './bahnschrift.woff2',
  display: 'swap',
})

export const metadata = {
  title: "PRÉ-VENDA_BAUG_CLOTHING",
  description: "",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Bahnschrift.className}>
      <Header />
        {children}
      </body>
    </html>
  );
}
