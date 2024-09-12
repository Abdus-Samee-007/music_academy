'use client'

import { BackgroundLines } from "@/components/ui/background-lines"

function page() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
    <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
      Get in Touch with us, <br /> Music Techies
    </h2>
    <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
      Get the best advices from our experts, including expert artists and musicians, totally free. <br />
      Email us at musictechies@gmail.com
    </p>
  </BackgroundLines>
  )
}

export default page