"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from "./project-showcase.module.css"
import ImageWrapper from '../common/ImageWrapper'
import { BASE_PATH_IMAGE } from '@/constants/configuration'
import { useRouter } from 'next/navigation'
import { NAV_ALL_PROJECT, NAV_CONTACT_ME } from '@/constants/navigation'
import { HomePageGridCard } from '@/interface/api-interface'
import { LINK_INSTA, LINK_LINKEDIN, LINK_MAIL } from '@/constants/links'
import {HamburgerMenu, Close } from '@/app/icons/common-icons'
import { BiPhone } from 'react-icons/bi'
import { CiPhone } from 'react-icons/ci'
import { MdEmail } from 'react-icons/md'
import HomeAboutMeCard from './home-about-me-card'
import { BsArrowRight } from 'react-icons/bs'

const CARD_CLASS = 'px-4 py-3 border border-gray-100 rounded-[20px] text-white'
const GRADIENT_CLASS = 'bg-gradient-to-br from-[#3C3C3C] to-[#070809]'

const PROJECT_IMAGES = [
    {
        id: 1,
        src: "/assets/images/sample-prj-1.png",
        alt: "project"
    },
    {
        id: 2,
        src: "/assets/images/sample-prj-2.png",
        alt: "project"
    },
    {
        id: 3,
        src: "/assets/images/sample-prj-3.png",
        alt: "project"
    },
    {
        id: 4,
        src: "/assets/images/sample-prj-4.png",
        alt: "project"
    },
]

const COMPANIES = [
    {
        label: "Factset",
        path: "/assets/images/factset-white.png"
    },
    {
        label: "Infosys",
        path: "/assets/images/infosys-white.png"
    },
    {
        label: "Lendroid",
        path: "/assets/images/lendroid.png"
    },
    {
        label: "MTX",
        path: "/assets/images/mtx-white.png"
    },
    {
        label: "Intell Design",
        path: "/assets/images/intell-design.png"
    }
]

export default function ProjectShowcase({homePageGridCard, numberOfProjects}:{homePageGridCard:HomePageGridCard, numberOfProjects:number}) {
    const router = useRouter()

    const [openMenu, setOpenMenu] = useState(false)
    const [currentRoute, setCurrentRoute] = useState("/")

    const routes = [
        {
            label: "Home",
            route: "/"
        },
        {
            label: "My Portfolio",
            route: NAV_ALL_PROJECT
        },
        {
            label: "Contact Me",
            route: NAV_CONTACT_ME
        },
        {
            label: "Case Study",
            route: NAV_ALL_PROJECT
        },
        {
            label: "Download CV",
            route: homePageGridCard.data.attributes.pdf_link
        },
        {
            label: "Certifications & Awards",
            route: "#"
        },
    ]

    return (
        <section className='bg-black-100 flex flex-col lg:grid lg:grid-cols-3 gap-4 px-6 pt-6 lg:px-10 lg:pt-10'>
            <div className={`${CARD_CLASS} flex items-center justify-between col-span-2`}>
                <div className='flex items-center gap-2'>
                    <div className='p-1 cursor-pointer' onClick={()=>setOpenMenu(true)}>
                        <HamburgerMenu className='w-8 h-8'/>
                    </div>
                    <div>
                        <ImageWrapper src={"/assets/images/my-sign-white.png"} alt='My Signature' width={222} height={75} />
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <div className='flex gap-2 items-center'>
                        <div className='p-2 bg-green-100 rounded-full'>
                            <BiPhone className='text-black-200' stroke='2'/>
                        </div>
                        <div className='text-green-100'>{homePageGridCard.data.attributes.contact_number}</div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <div className='p-2 bg-green-100 rounded-full'>
                            <MdEmail className='text-black-200' />
                        </div>
                        <div className='text-green-100'>{homePageGridCard.data.attributes.email}</div>
                    </div>
                    <div>
                        <Link target='_blank' href={homePageGridCard.data.attributes.linkedin_link} className='bg-[#007EBB] p-[8px] flex flex-row justify-center items-center rounded-full h-[35px] w-[35px]'>
                            <ImageWrapper src="/assets/images/linkedin.png" alt='Linkedin' width={200} height={200} className='w-full h-full object-contain' />
                        </Link>
                    </div>
                    <div>
                        <Link target='_blank' href={homePageGridCard.data.attributes.insta_link ?? ""} className='h-[35px] w-[35px]'>
                            <ImageWrapper src="/assets/images/insta-colored.png" alt='Instagram' width={40} height={40}  />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={`${CARD_CLASS} flex flex-col py-8`}>
                <div className='flex flex-row justify-end'>
                    <div className=''>
                        <span className='text-green-100 line-through'>
                            <span className='text-gray-500 text-2xl font-semibold'>2024</span>
                        </span>
                        <span className='text-3xl font-semibold'>{' '} 2025</span>
                    </div>
                </div>
                <div className='text-lg font-semibold text-right tracking-[0.25rem] '> Design Trend - Expert </div>
            </div>
            <div className={`${CARD_CLASS} flex flex-col col-span-3`}>
                <HomeAboutMeCard/>
                <div className='flex gap-6 py-4'>
                    <div className='bg-green-100 rounded-lg px-6 py-4 text-black-200 flex gap-4 w-80 justify-center'>
                        <div className='flex flex-col gap-2 justify-center'>
                            <div className='uppercase italic text-xs'>Since</div>
                            <div className='text-2xl font-bold'>2012</div>
                        </div>
                        <div className='w-px h-full bg-black-200'></div>
                        <div className='flex flex-col gap-2 justify-center'>
                            <div className='uppercase'>Experience</div>
                            <div>(12 Years)</div>
                        </div>
                    </div>
                    <div className='w-full overflow-x-auto'>
                        <div className='w-full'>
                            <div className='flex gap-4'>
                                {COMPANIES.map(company=>(
                                    <div key={company.label} className={`${CARD_CLASS} ${GRADIENT_CLASS} flex flex-col justify-center items-center`}>
                                        <ImageWrapper src={company.path} alt='' width={"300"} height={"30"} className=''/>
                                    </div>
                                )) }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => router.push(NAV_ALL_PROJECT)} className={`${CARD_CLASS} cursor-pointer pb-[4rem] lg:pb-4 col-span-2 justify-between ${GRADIENT_CLASS} flex flex-col lg:flex-row`}>
                <div className='flex flex-col gap-6 w-full'>
                    <div className='flex justify-between'>
                        <div className='flex flex-col gap-1'>
                            <div className='text-xl font-bold uppercase'>UX Case studies & Visual design</div>
                            <div>(100+ Products and services)</div>
                        </div>
                        <div className='text-green-100 flex gap-2 items-center'>
                            View All
                            <div className='p-2 bg-green-100 rounded-full'>
                                <BsArrowRight className='text-black-200'/>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col flex-1 p-4 justify-center items-center'>
                        <div className={`w-full  h-full relative ${styles.projectImageContainer}`}>
                            {PROJECT_IMAGES.map((projectImage) => (
                                <ImageWrapper key={projectImage.id} width={0} height={0} sizes='100vw' fill objectFit='cover' className={`absolute top-0 left-0 h-full w-full object-cover rounded-[1rem] border-[5px] border-gray-600 ${styles.projectImage}`} src={`${projectImage.src}`} alt={projectImage.alt} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${CARD_CLASS}`}>
                <ImageWrapper src="/assets/images/my-photo-big.png" alt='My Profile Image' width={340} height={450} className='w-full h-full object-cover' />
            </div>
            
           
            {/* <div className={`${CARD_CLASS}`}>
                <div className='flex flex-col gap-4'>
                    <div className='text-3xl font-bold uppercase'>Experience</div>
                    <div className='flex flex-row items-center gap-2'>
                        <span className='tracking-[0.5rem]'>SINCE {' '}</span>
                        <span className='text-3xl font-bold underline text-transparent'><span className='text-white'>20</span><span className='underline text-green-100'><span className='text-white'>12</span></span></span>
                    </div>
                    <div className='flex flex-col gap-16'>
                        <div className='text-gray-300 font-bold uppercase tracking-[0.25rem]'>
                            Companies I enjoy working with
                        </div>
                        <div className='flex flex-row flex-wrap gap-6 items-center'>
                            <ImageWrapper src={"/assets/images/mtx.png"} width={99} height={99} alt='MTX' />
                            <ImageWrapper src={"/assets/images/infosys.png"} width={150} height={60} alt='INFOSYS' />
                            <ImageWrapper src={"/assets/images/factset.png"} width={160} height={36} alt='FACTSET' />

                        </div>
                    </div>
                </div>
            </div> */}
            {openMenu && <div className="hamburger fixed inset-0 w-full h-full bg-black/70 text-white backdrop-blur-lg z-100 flex px-6">
                <div onClick={()=>setOpenMenu(false)} className="absolute top-10 right-5 text-black p-2 rounded-full bg-white">
                    <Close className="cursor-pointer text-black-200 w-6 h-6"/>
                </div>
                <div className="flex flex-col h-full justify-center items-center gap-8 w-full">
                    {
                        routes.map((route)=>{
                            return <div key={route.label}><Link onClick={()=>{
                                    setOpenMenu(false)
                                }} href={`${route.route}`} className={`font-semibold uppercase w-full text-left ${route.route===currentRoute ? "text-green-100":""}`}>
                                {route.label}
                            </Link></div>
                        })
                    }
                    <div className='h-px bg-green-100 w-full md:w-1/2 lg:w-1/3'></div>
                    <div className='flex flex-col gap-4 items-center'>
                        <div onClick={()=>setOpenMenu(false)} className="">
                            <Link href={`mailto:${homePageGridCard.data.attributes.email}`}>
                                <button className="rounded-lg px-8 py-4 bg-green-100 text-black-200 w-full">
                                    <div className='font-bold'>
                                        {homePageGridCard.data.attributes.email}
                                    </div>
                                    <div className='text-xs'>
                                        email me
                                    </div>
                                </button>
                            </Link>
                        </div>
                        <div onClick={()=>setOpenMenu(false)} className="">
                            <Link href={`tel:${homePageGridCard.data.attributes.contact_number}`}>
                                <button className="rounded-lg px-8 py-4 bg-green-100 text-black-200 w-full">
                                    <div className='font-bold'>
                                        {homePageGridCard.data.attributes.contact_number}
                                    </div>
                                    <div className='text-xs'>
                                        Contact Number
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>}
        </section>
    )
}
