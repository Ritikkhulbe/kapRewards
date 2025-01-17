import React, { ReactNode } from "react"

const FormLayout = ({ children, className }: { children: ReactNode; className?: string }) => {
  const header = React.Children.toArray(children).find(
    (child) => (child as any).type?.displayName === "FormHeader"
  )
  const list = React.Children.toArray(children).find(
    (child) => (child as any).type?.displayName === "FormList"
  )
  const otherChildren = React.Children.toArray(children).filter(
    (child) =>
        ![
            "FormHeader",
            "FormList",
        ].includes((child as any).type?.displayName)
)

  return (
    <div className={`border rounded-xl bg-primary ${className}`}>
      {/* Render Header */}
      <div>{header}</div>
      {/* Render Form List */}
      <div className="px-4">{list}</div>
      {otherChildren}
    </div>
  )
}

export const FormHeader = ({ children, className }: { children: ReactNode; className?: string }) => (
  <h1 className={`text-2xl p-3 text-textsecondary pl-5  border-b font-semibold ${className}`}>{children}</h1>
)
FormHeader.displayName = "FormHeader"

export default FormLayout
