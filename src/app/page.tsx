"use client"

import { useState } from "react";

export default function Home() {
  // const color:string[] = ["bg-[#EDEDE9]", "bg-[#EDEDD1]", "bg-[#EDEDB9]"]
  // const [index, setIndex] = useState<number>(0)

  // const [digit, setDigit] = useState<number>(0)
  // const increment = () => {
  //   setDigit(digit + 2)
  // }
  // const decrement = () => {
  //   setDigit(digit - 2)
  // }

  // const changeColor = () => {
  //   if (index < color.length - 1) {
  //     setIndex(index + 1)
  //   }
  //   else {
  //     setIndex(0)
  //   }
  // }
  return (
    // <div className={`flex flex-col min-h-screen gap-2 items-center justify-center ${color[index]}`}>
    // <h1 className="flex justify-center screen-[100vh] mt-4 text-[20px] text-[#463F3A]">Hello world!</h1>
    // <h1 className="flex justify-center screen-[100vh] mt-4 text-[20px] text-[#463F3A]">{digit}</h1>
    // <div className="flex row gap-2">
    // <button className="w-[50px] h-[40px] bg-[#463F3A] hover:bg-[#A3B18A] rounded-xl hover:text-[#463F3A] text-[#EDEDE9]" onClick={increment}>+</button>
    // <button className="w-[50px] h-[40px] bg-[#463F3A] hover:bg-[#A3B18A] rounded-xl hover:text-[#463F3A] text-[#EDEDE9]" onClick={decrement}>-</button>
    // </div>
    // <button className="w-[120px] bg-[#463F3A] hover:bg-[#A3B18A] rounded-xl hover:text-[#463F3A] text-[#EDEDE9]" onClick={changeColor}>Change color</button>
    // </div>
    <h1>Welcome home!</h1>
  );
}
