import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from "./project-showcase.module.css"

const CARD_CLASS = 'px-6 py-4 border border-gray-100 rounded-[20px] text-white'

export default function ProjectShowcase() {
    return (
        <section className='bg-black-100 flex flex-col lg:grid lg:grid-cols-3 p-6 gap-4'>
            <div className={`${CARD_CLASS} flex items-center col-span-2`}>
                <div>
                    <span className='text-6xl '>
                        Suganth
                    </span>
                    <span className='inline-block mx-1 h-2 w-2 bg-gradient-to-r from-[#939393] to-[#070809] rounded-[20px]'>
                    </span>
                    <span className='text-lg'>
                        Hello!
                    </span>
                </div>
            </div>
            <div className={`${CARD_CLASS} bg-gradient-to-br from-[#3C3C3C] to-[#070809] flex flex-col gap-[10px] justify-between`}>
                <div className='text-right'>FAVORITE</div>
                <div className='h-[2px] bg-gray-200'></div>

                <div className='flex items-center gap-5 justify-end'>
                    <div className='flex flex-col items-end'>
                        <div>SUKA AK</div>
                        <div className='text-green-100'>I’m Waiting...</div>
                    </div>
                    <div className='w-[42px] h-[42px] overflow-hidden rounded-[42px]'>
                        <Image src="/assets/images/my-photo-1.png" alt='My Profile Image' width={100} height={100} className='w-full h-full object-cover' />
                    </div>
                </div>
            </div>
            <div className={`${CARD_CLASS} flex flex-col justify-between`}>
                <div className='flex flex-col gap-2'>
                    <div className='text-3xl font-bold'>Me?</div>
                    <p className='text-xl'>
                        <span className='text-gray-300'>
                            I’m passion about creating {' '}
                        </span>
                        emotional experiences {' '}
                        <span className='text-gray-300'>
                            through digital {' '}
                        </span>
                        design, {' '}
                        <span className='text-gray-300'>
                            and I'm interested in {' '}
                        </span>
                        Artificial Intelligence, Virtual Reality.</p>
                </div>
                <div className='flex  flex-row justify-between items-end'>
                    <Image src="/assets/images/gamepad-big.png" alt='Gamepad Big' width={140} height={117} className='' />
                    <div className='flex flex-col gap-[8px]'>
                        <div className='text-2xl'>Connect with me</div>
                        <div className='flex flex-row gap-2 justify-end'>
                            <Link href="/" className='bg-black-200 border border-gray-400 p-[8px] flex flex-row justify-center items-center rounded-full h-[35px] w-[35px]'>
                                <Image src="/assets/images/gmail.png" alt='Gmail' width={200} height={200} className='w-full h-full object-contain' />
                            </Link>
                            <Link href="/" className='bg-black-200 border border-gray-400 p-[8px] flex flex-row justify-center items-center rounded-full h-[35px] w-[35px]'>
                                <Image src="/assets/images/instagram.png" alt='Instagram' width={200} height={200} className='w-full h-full object-contain' />
                            </Link>
                            <Link href="/" className='bg-black-200 border border-gray-400 p-[8px] flex flex-row justify-center items-center rounded-full h-[35px] w-[35px]'>
                                <Image src="/assets/images/linkedin.png" alt='Linkedin' width={200} height={200} className='w-full h-full object-contain' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${CARD_CLASS}`}>
                <Image src="/assets/images/my-photo-big.png" alt='My Profile Image' width={340} height={450} className='w-full h-full object-cover' />
            </div>
            <div className='flex flex-col gap-4'>
                <div className={`${CARD_CLASS} flex flex-col py-8`}>
                    <div className='flex flex-row justify-center'>
                        <div className='text-center'>
                            <span className='text-green-100 line-through'>
                                <span className='text-gray-500 text-2xl font-semibold'>2023</span>
                            </span>
                            <span className='text-3xl font-semibold'>{' '} 2024</span>
                        </div>
                    </div>
                    <div className='text-lg font-semibold text-center tracking-[0.25rem] uppercase'>Expert - Design Trend </div>
                </div>
                <div className={`${CARD_CLASS} flex-1`}>
                    <div className={`flex flex-col gap-2 justify-end bg-[url("/assets/images/bento-box.png")] bg-cover bg-no-repeat h-full rounded-[10px] ${style.bentoBoxBg}`}>
                        <span className='px-4 text-2xl font-bold'>
                            Bento Box
                        </span>
                        <span className='px-4 pb-2 text-sm font-semibold'>
                            Grid-based approach, where content is organised into distinct 'cells' that work together to create aesthetically pleasing user interfaces and a strong content hierarchy
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
