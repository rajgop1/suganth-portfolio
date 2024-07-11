import Image from 'next/image'
import React from 'react'
import ImageWrapper from './ImageWrapper'
import Link from 'next/link'

const FOOTER_LINKS = [
    {
        id: 1,
        label: "Home",
        linkTo: "/",
    },
    {
        id: 2,
        label: "Blogs",
        linkTo: "/",
    },
    {
        id: 3,
        label: "About",
        linkTo: "/",
    },
    {
        id: 4,
        label: "Favorite Games",
        linkTo: "/",
    },
    {
        id: 5,
        label: "Contact",
        linkTo: "/",
    },
    {
        id: 6,
        label: "Gaming Room",
        linkTo: "/",
    },
    {
        id: 7,
        label: "Resource",
        linkTo: "/",
    },
    {
        id: 8,
        label: "Office Room",
        linkTo: "/",
    },
    {
        id: 9,
        label: "Portfolio",
        linkTo: "/",
    },
]

export default function Footer() {
    return (
        <>
            <section className='footer flex gap-8 flex-col items-center bg-black-100 text-white px-6 pt-6 lg:px-20 lg:pt-20 justify-between'>
                <div className='flex flex-col lg:flex-row justify-between items-center w-full'>
                    <div className='flex flex-col lg:flex-row justify-between items-center w-full gap-2 lg:gap-[8rem]'>
                        <div className='w-[260px] h-[100px] w-[460px] h-[150px] flex-1'>
                            <ImageWrapper width={0} height={0} src={"/assets/images/my-sign-white.png"} alt='My Signature White' sizes='100vw' className='w-full h-full object-cover' />
                        </div>
                        <div className='grid grid-cols-2 gap-y-2 flex-1 justify-center '>
                            {FOOTER_LINKS.map((footerLink) => {
                                return <Link key={footerLink.id} href={footerLink.linkTo} className=''>
                                    {footerLink.label}
                                </Link>
                            })}
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-between w-full'>
                    <div className='flex flex-col'>
                        <div>India</div>
                        <Link href={"mailto:vasuak_3112@yahoo.in"}>vasuak_3112@yahoo.in</Link>
                    </div>
                    <div>
                        &copy; 2024
                    </div>
                </div>
                <div className='uppercase lg:text-8xl text-8xl font-bold text-center'>SUGANTH  ALAGESAN</div>
            </section>
            <div className='relative flex justify-center items-center p-2 bg-green-100 h-[2rem] w-full mt-[3rem]'>
                <div className='h-[2px] bg-gray-200 w-full'>

                </div>
            </div>
        </>
    )
}

const FooterBanner = () => {
    return <div>

    </div>
}
