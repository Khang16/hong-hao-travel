"use client"
import gsap from "gsap"
import { useEffect } from "react"
// learn Gsap
const Gsap: React.FC = () => {
  useEffect(() => {
    gsap.to(".box",{
      y: 200,
      rotation: 360,
      duration: 4,
      repeat: -1
    })
  }, []);

  return (
    <>
      <div className="box w-[5rem] h-[5rem] bg-red-500 m-[5rem]">

      </div>
    </>
  )
}
export default Gsap