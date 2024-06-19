import React from 'react'
import Navbar from "../Navbar"
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";

const MainLayout = ({ children, classNames }: {
  classNames?: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Navbar />
      <main className="w-full h-full py-[75px] min-h-screen">
        {children}
      </main>
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default MainLayout
