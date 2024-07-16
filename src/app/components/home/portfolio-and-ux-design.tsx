"use client"
import Image from 'next/image'
import React, { Fragment } from 'react'
import ImageWrapper from '../common/ImageWrapper'
import { Separator } from '../common/Separator'
import { SinglePortfolioPageSchema } from '@/interface/api-interface'
import { useRouter } from 'next/navigation'

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

export default function PortfolioAndUxDesign({singlePortfolio}:{singlePortfolio:SinglePortfolioPageSchema}) {
    const router = useRouter()
    return (
        <section className='bg-black-100 text-white px-6 pt-6 lg:px-20 lg:pt-20'>
            <div className='uppercase text-3xl font-bold'>Portfolio - UX & UI Design</div>
            <div className=''>
                <Separator />
            </div>
            <section className='flex flex-col gap-y-[1rem] lg:gap-y-0 lg:grid grid-cols-3 gap-x-[2rem]'>
                {
                    singlePortfolio.data.map((card, index) => {
                        // const projects = card.projects > 5 ? "5+ Projects" : `${card.projects} Projects`
                        const projects = card.attributes.organisation

                        return <Fragment key={card.id}>
                            <div onClick={()=>router.push(`/${card.attributes.slug}`)} className='cursor-pointer rounded-[20px] bg-gray-700 flex flex-col gap-[1.6rem] p-8 tracking-[0.25rem]'>
                                <div className='uppercase text-xl font-semibold'>{card.attributes.sector}</div>
                                <div className='h-[260px]'>
                                    <ImageWrapper width={0} height={0} sizes='100vw' className='w-full h-full rounded-[20px] object-cover' alt={card.attributes.thumbnail_image.data.attributes.alternativeText || `${card.attributes.project_name} image`} src={card.attributes.thumbnail_image.data.attributes.url} />
                                </div>
                                <div className='flex flex-row gap-3 justify-center items-center'>
                                    <div className='text-xs lg:text-md font-bold uppercase opacity-[0.5]'>{card.attributes.project_name}</div>
                                    <div className='h-[0.5rem] w-[0.5rem] rounded-full bg-white'></div>
                                    <div className='uppercase font-bold text-xs lg:text-md'>
                                        {projects}
                                    </div>
                                </div>
                            </div>
                            {(index + 1) % 3 === 0 && <div className='hidden lg:block col-span-3 justify-item justify-self-auto'>
                                <Separator />
                            </div>}
                        </Fragment>
                    })
                }
            </section>
        </section>
    )
}

