
interface GenericLayoutButtonProps {
    buttonHandler?: () => any,
    buttonVariant?: string, 
    buttonText?: string,
    buttonClassName?: string
}

export interface GenericLayoutProps {
    title: string, 
    notificationNumber?:string, 
    description: string, 
    isButton?: boolean, 
    button?: GenericLayoutButtonProps
}