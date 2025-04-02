import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-9 w-full min-w-0 text-gray-800  border-black rounded-4xl border-1 bg-white px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none",
        className
      )}
      {...props}
    />
  )
}

export { Input };
