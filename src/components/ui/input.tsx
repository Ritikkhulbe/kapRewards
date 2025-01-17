import * as React from "react"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={"flex h-9 border  px-4 py-3 text-[14px] rounded-[8px] placeholder:text-textsecondary-light  focus:outline-none focus:ring-2 focus:ring-third-light "+className}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
