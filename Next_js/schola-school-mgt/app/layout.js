import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/scss/main.scss";
import { Manrope } from 'next/font/google';
import { ToastContainer } from "react-toastify";
// import { ToastContainer } from "react-bootstrap";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'], 
  variable: '--font-manrope', 
})

export const metadata = {
  title: "School Dashboard",
  description: "School Management Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} `}
    >
      <body>
         <ToastContainer
          position="top-right"
          autoClose={3000}
        />

        {children}
        </body>
    </html>
  );
}