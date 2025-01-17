import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import React, { ReactNode } from "react"

const GenericLayout = ({ children, className }: { children: ReactNode, className?: string }) => {
  // Filter children by type
  const header = React.Children.toArray(children).find(
    (child) =>
      (child as any).type?.displayName === "GenericLayoutHeader"
  )
  const description = React.Children.toArray(children).find(
    (child) =>
      (child as any).type?.displayName === "GenericLayoutDescription"
  )
  const notification = React.Children.toArray(children).find(
    (child) =>
      (child as any).type?.displayName === "GenericLayoutNotification"
  )
  const button = React.Children.toArray(children).find(
    (child) =>
      (child as any).type?.displayName === "GenericLayoutButton"
  )
  const otherChildren = React.Children.toArray(children).filter(
    (child) =>
      ![
        "GenericLayoutHeader",
        "GenericLayoutDescription",
        "GenericLayoutButton",
        "GenericLayoutNotification",
      ].includes((child as any).type?.displayName)
  )

  return (
    <div className={"m-3 "+className}>
      <div className="flex justify-between items-start">
        <div>
          {/* Render header and description on the left */}
          <div className="flex items-center mb-2">
          {header}{notification}
          </div>
          {description}
        </div>
        <div className="flex items-center">
          {/* Render button on the right */}
          {button}
        </div>
      </div>
      <Separator orientation="horizontal" className="my-2" />
      <div className="w-full">{otherChildren}</div>
    </div>
  )
}

export const GenericLayoutHeader = ({ children, className="" }: { children: ReactNode, className?: string }) => (
  <h1 className={"text-2xl font-bold "+className}>{children}</h1>
)
GenericLayoutHeader.displayName = "GenericLayoutHeader"

export const GenericLayoutDescription = ({
  children,
  className = "",
}: {
  children: ReactNode, className?: string
}) => <p className={"text-base text-slate-800 "+className}>{children}</p>
GenericLayoutDescription.displayName = "GenericLayoutDescription"

export const GenericLayoutButton = ({
  children,
  onClick,
  className = "",
}: {
  children: ReactNode
  onClick?: () => void
  className?: string
}) => (
  <Button
    onClick={onClick}
    className={"mt-2 "+className}>
    {children}
  </Button>
)
GenericLayoutButton.displayName = "GenericLayoutButton"

export const GenericLayoutNotification = ({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) => (
    <span className={"bg-third text-xs text-white rounded-2xl py-[2px] px-3 mx-2 font-semibold "+className}>{children}</span>
)
GenericLayoutNotification.displayName = "GenericLayoutNotification"

export default GenericLayout
