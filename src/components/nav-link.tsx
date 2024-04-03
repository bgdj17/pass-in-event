import { ComponentProps } from "react"

interface NavLinkProps extends ComponentProps<'a'>{
    // href: string | undefined
    // children: ReactNode
}
export function NavLink(props: NavLinkProps){
    return (
        <a {...props} className='font-medium text-sm'></a>
    )
}