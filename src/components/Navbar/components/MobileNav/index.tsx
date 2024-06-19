import Logo from "@/components/Logo"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { AlignJustify, ChevronRight } from "lucide-react"
import React from 'react'
import Link from "next/link"
import { navItems } from "@/constant"


const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="p-2 hover:bg-accent rounded-xl">
        <AlignJustify />
      </SheetTrigger>
      <SheetContent className="bg-background dark:bg-brandBg border-none px-4 overflow-y-auto">
        <div className="w-full flex flex-col items-center justify-between h-full py-6">
          <div className="w-full flex flex-col items-center gap-y-3">
            <SheetClose>
              <Logo />
            </SheetClose>
            <div className="w-full flex flex-col items-start justify-left text-sm sm:text-lg">
              {
                navItems.map((item, index) => (
                  <SheetClose key={index} asChild className="w-full">
                    <Link href={item.href} className="w-full p-4 rounded-xl hover:bg-brandBg dark:hover:bg-background text-brandText font-semibold hover:text-primary transition-all">
                      {item.name}
                    </Link>
                  </SheetClose>
                ))
              }
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
