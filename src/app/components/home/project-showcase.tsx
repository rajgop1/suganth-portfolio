import Image from 'next/image'
import React from 'react'

const CARD_CLASS = 'px-6 py-4 border border-gray-100 rounded-[20px] text-white'

export default function ProjectShowcase() {
    return (
        <section className='bg-black-100 grid grid-cols-3 p-6 gap-4'>
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
            <div className={`${CARD_CLASS}`}>
                <div className='text-2xl'>Me?</div>
                <p className=''>
                    <span className='text-gray-300'>
                        I’m passion about creating
                    </span>
                    emotional experiences
                    <span className='text-gray-300'>
                        through digital
                    </span>
                    design,
                    <span className='text-gray-300'>
                        and I'm interested in
                    </span>
                    Artificial Intelligence, Virtual Reality.</p>
            </div>
        </section>
    )
}
