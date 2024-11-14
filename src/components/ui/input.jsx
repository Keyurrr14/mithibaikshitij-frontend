import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "w-full md:max-w-xs sm:text-2xl text-md sm:p-2 p-1 bg-transparent border-b-[1px] sm:border-b-2 border-gray-400/80 outline-none text-gray-300 font-lusitana",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
