import Image from 'next/image'
import React from 'react'

export default function LetsGoForTea() {
    return (
        <section className='px-20 pt-20 bg-black-100 text-white'>
            <section className='flex flex-row px-[2rem] py-[4rem] bg-gray-700 items-center justify-between'>
                <div className='flex-1 flex flex-col gap-[2rem]'>
                    <div className='uppercase text-6xl font-bold tracking-[0.25rem]'>
                        Lets go for Tea?
                    </div>
                    <div className='uppercase font-medium tracking-[0.25rem]'>
                        It's time to create wonderful things! Let’s create together!
                    </div>
                </div>
                <div className='flex-1 flex flex-row justify-center'>
                    <Image src={"/assets/images/gamepad-right-big.png"} width={300} height={250} alt='Gamepad Big Right' />
                </div>
            </section>
        </section>
    )
}
