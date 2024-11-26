export function HamburgerMenu({className="w-6 h-6 text-white", title="Menu"}:{className?: string, title?: string}){
    return <svg className={className}>
        <title>{title}</title>
        <use href="/assets/images/common-icons.svg#hamburger"/>
    </svg>
}

export function Close({className="w-6 h-6 text-black-100", title="Menu"}:{className?: string, title?: string}){
    return <svg className={className}>
        <title>{title}</title>
        <use href="/assets/images/common-icons.svg#close"/>
    </svg>
}