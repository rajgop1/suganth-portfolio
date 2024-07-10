"use client"
import Image from 'next/image'
import React from 'react'

const PORTFOLIO_AND_UIUX_DESIGN_DATA = [
    {
        id: 1,
        title: "Fintech",
        company: "Factset",
        projects: 10,
        avaiableOnIos: true,
        avaiableOnAndroid: true,
        avaiableOnWeb: true,
        img: "/assets/images/fintech.png"
    },
    {
        id: 2,
        title: "AI",
        company: "Doc Search",
        projects: 2,
        avaiableOnIos: true,
        avaiableOnAndroid: true,
        avaiableOnWeb: true,
        img: "/assets/images/ai.png"
    },
    {
        id: 3,
        title: "Blockchain",
        company: "Factset",
        projects: 3,
        avaiableOnIos: true,
        avaiableOnAndroid: true,
        avaiableOnWeb: true,
        img: "/assets/images/blockchain.png"
    },
    {
        id: 4,
        title: "Fintech",
        company: "Factset",
        projects: 10,
        avaiableOnIos: true,
        avaiableOnAndroid: true,
        avaiableOnWeb: true,
        img: "/assets/images/fintech.png"
    },
    {
        id: 5,
        title: "AI",
        company: "Factset",
        projects: 10,
        avaiableOnIos: true,
        avaiableOnAndroid: true,
        avaiableOnWeb: true,
        img: "/assets/images/ai.png"
    },
    {
        id: 6,
        title: "Blockchain",
        company: "Factset",
        projects: 10,
        avaiableOnIos: true,
        avaiableOnAndroid: true,
        avaiableOnWeb: true,
        img: "/assets/images/blockchain.png"
    },
]

export default function PortfolioAndUxDesign() {
    return (
        <section className='bg-black-100 text-white px-20 pt-20'>
            <div className='uppercase text-3xl font-bold'>Portfolio - UX & UI Design</div>
            <div className=''>
                <Separator />
            </div>
            <section className='grid grid-cols-3 gap-x-[2rem]'>
                {
                    PORTFOLIO_AND_UIUX_DESIGN_DATA.map((card, index) => {
                        const projects = card.projects > 5 ? "5+ Projects" : `${card.projects} Projects`

                        return <>
                            <div className='rounded-[20px] bg-gray-700 flex flex-col gap-[1.6rem] p-8 tracking-[0.25rem]'>
                                <div className='uppercase text-xl font-semibold'>{card.title}</div>
                                <div className='h-[260px]'>
                                    <Image width={0} height={0} sizes='100vw' className='w-full h-full rounded-[20px] object-cover' alt={card.title} src={card.img} />
                                </div>
                                <div className='flex flex-row gap-3 justify-center items-center'>
                                    <div className='text-md font-bold uppercase opacity-[0.5]'>{card.company}</div>
                                    <div className='h-[0.5rem] w-[0.5rem] rounded-full bg-white'></div>
                                    <div className='uppercase font-bold'>
                                        {projects}
                                    </div>
                                </div>
                            </div>
                            {(index + 1) % 3 === 0 && <div className='col-span-3 justify-item justify-self-auto'>
                                <Separator />
                            </div>}
                        </>
                    })
                }
            </section>
        </section>
    )
}

const Separator = () => {
    return <div className='py-6 mx-[-20px] '>
        <div className=' h-[2px] bg-gray-300 w-full'></div>
    </div>
}