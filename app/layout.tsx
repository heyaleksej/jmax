import './globals.css'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { montserrat, donpoligrafbum } from "./fonts";
import FeedBackSection from "../components/feedBackForm/FeedBackSection";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${donpoligrafbum.variable}`} >
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
