"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { images } from "@/commons/images"

const HeaderPage = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isScrolledToTop, setIsScrolledToTop] = useState(true)

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY === 0) {
        setIsScrolledToTop(true)
      } else {
        setIsScrolledToTop(false)
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", controlHeader)

    return () => {
      window.removeEventListener("scroll", controlHeader)
    }
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolledToTop ? "bg-transparent shadow-none" : "bg-white shadow-sm"
      }`}
    >
      <div className="w-full max-w-[100rem] mx-auto px-6 md:px-20 py-4">
        <div className="flex items-center justify-between ">
          {/* Logo Section */}
          <div className="relative flex items-center gap-3 w-[9.6rem] h-[3.1rem]">
            <Image
              src={isScrolledToTop ? images.logoWhite : images.logoBlack}
              alt="Honghao Logo"
              fill
              className="object-container w-full "
            />
            
          </div>

          <Button className="bg-[#E64827] hover:bg-[#d63f20] text-white px-6 py-2.5 rounded-full font-medium">
            <Menu className="w-4 h-4 mr-2" />
            MENU
          </Button>
        </div>
      </div>
    </header>
  )
}

export default HeaderPage
