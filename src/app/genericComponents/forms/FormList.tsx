import React, { ReactNode } from "react"

const FormList = ({ children, className }: { children: ReactNode; className?: string }) => {
    const tabs = React.Children.toArray(children).filter(
        (child) => (child as any).type?.displayName === "FormTab"
    )

    return <div className={className}>{tabs}</div>
}
FormList.displayName = "FormList"

export const FormTab = ({ children, className="" }: { children: ReactNode; className?: string }) => {
    const title = React.Children.toArray(children).find(
        (child) => (child as any).type?.displayName === "TabTitle"
    )
    const description = React.Children.toArray(children).find(
        (child) => (child as any).type?.displayName === "TabDescription"
    )
    const otherChildren = React.Children.toArray(children).filter(
        (child) =>
            ![
                "TabTitle",
                "TabDescription",
            ].includes((child as any).type?.displayName)
    )

    return (
        <div className={"p-4 w-full flex border-b last:border-none gap-5 py-5  "+className}>
            <div className="w-1/2">
                <div className="font-bold text-textsecondary text-[10px]">{title}</div>
                {description && <div className="text-[12px] text-textsecondary-light">{description}</div>}
            </div>
            <div className="flex w-full items-center">
            {otherChildren}
            </div>
        </div>
    )
}
FormTab.displayName = "FormTab"

export const TabTitle = ({ children, className }: { children: ReactNode; className?: string }) => (
    <h2 className={` font-bold text-textsecondary text-[14px] mt-0 ${className}`}>{children}</h2>
)
TabTitle.displayName = "TabTitle"

export const TabDescription = ({ children, className }: { children: ReactNode; className?: string }) => (
    <p className={`text-[12px] text-gray-500 ${className}`}>{children}</p>
)
TabDescription.displayName = "TabDescription"


export default FormList
