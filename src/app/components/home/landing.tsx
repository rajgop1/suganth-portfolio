import Image from 'next/image'
import React from 'react'
import styles from "./landing.module.css"

const cards = [
    {
        id: 1,
        title: "multi-disciplinary UX & UI Designer",
        description: "A proficient communicator in design language and a versatile professional with expertise in both user experience and user interface design across multiple disciplines.",
        tag: "Intro",
        gradient: ["#ACACAC", "#4E4C4C"],
        order: 1
    },
    {
        id: 2,
        title: "Digital Design language speaker",
        description: "My primary focus is creating top-notch and memorable digital experiences.",
        tag: "Language",
        gradient: ["#9878AD", "#4E285E"],
        order: 2
    },
    {
        id: 3,
        title: "thinking of creative",
        description: "I enjoy thinking of creative approaches to keep ahead of the game.",
        tag: "creative",
        gradient: ["#7884AD", "#29285E"],
        order: 3
    },
    {
        id: 4,
        title: "Using design thinking, to solve problems",
        description: "Every digital product/design has a unique story, and it's essential for me to convey yours specifically",
        tag: "Experience",
        gradient: ["#29285E", "#5E2848"],
        order: 4
    },
]

export default function Landing() {
    let rotate = 0
    let zIndex = cards.length
    const updateCards = cards.map((card) => {
        let newCardObj = { ...card, rotate, zIndex } 
        zIndex--
        rotate += 5
        return newCardObj
    })

    return (
        <section className='h-[100vh] flex'>
            <section className='w-1/3 bg-orange-100'>
                <Image width={300} height={100} alt='My Signature (Suganth)' src={"/assets/images/my-sign.png"} />
            </section>
            <section className='relative'>
                <section className='absolute top-0 left-0 h-full z-1'>
                    {updateCards.map(card => {
                        return <section key={card.id} className='card top-[50%] left-0 absolute p-6 min-h-[570px] min-w-[350px] rounded-[1.25rem]' style={{ transform: `translate(-50%,-50%) rotate(${card.rotate}deg)`, background: `linear-gradient(45deg, ${card.gradient[0]}, ${card.gradient[1]})`, zIndex: `${card.zIndex}`, transformOrigin:"center" }}>
                            <div className='uppercase text-white'>
                                {card.title}
                            </div>
                            <div className='text-white'>
                                {card.description}
                            </div>
                        </section>
                    })}
                </section>
            </section>
            <section className='w-2/3 bg-black-100'></section>
        </section>
    )
}
