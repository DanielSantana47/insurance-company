import { NavLinkType } from "@/types/navLinkType"

export const NavLink = ({hook, label}: NavLinkType)=> {
    return(
        <a href={hook} className="hover:text-primary transition-all duration-300 group sm:text-md lg:text-lg">
                {label}
            <div className="border-b border-primary w-0 group-hover:w-full transition-all duration-400"></div>
        </a>
    )
}