"use client";

import { ArrowUp, ChevronUp } from "lucide-react";
import React, { useEffect, useState } from 'react'
import { Button } from "../ui/button";

const ScrollToTop = () => {
  const [toTopBtn, setToTopBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 500 ? setToTopBtn(true) : setToTopBtn(false)
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div className='fixed z-50 right-5 bottom-16 sm:right-10 sm:bottom-14'>
      {toTopBtn && (
        <Button size="icon" className="animate-pulse transition-all secondary-shadow rounded-full" onClick={scrollUp}>
          <ChevronUp />
        </Button>
      )}
    </div>
  )
}

export default ScrollToTop