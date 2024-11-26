import React from 'react'
import ImageWrapper from './ImageWrapper'

export default function Header() {
    
    return (
        <section className='flex flex-row justify-between bg-orange-100 px-[2rem] py-[1rem] items-center'>
            <ImageWrapper width={0} height={0} sizes='100vw' className='h-[7rem] w-[16rem]' alt='My Signature (Suganth)' src={"/assets/images/my-sign-white.png"} />
        </section>
    )
}
