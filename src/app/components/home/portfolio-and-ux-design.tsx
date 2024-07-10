"use client"
import React from 'react'

export default function PortfolioAndUxDesign() {
    return (
        <section className='bg-black-100 text-white px-20 pt-20'>
            <div className='uppercase text-3xl font-bold'>Portfolio - UX & UI Design</div>
            <div className='py-4 mx-[-20px]'>
                <Separator />
            </div>

        </section>
    )
}

const Separator = () => {
    return <div className='h-[2px] bg-gray-300 w-full'></div>
}