"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from "./landing.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { setScreenTypeMultiCards } from '@/store/redux/screen-type'
import { createRandomGenerator, generateSequence, shuffleGenerator } from '@/util/helper'

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
    const dispatch = useDispatch()
    const isScreenTypeMultiCards = useSelector((state: any) => state.screenType.isScreenTypeMultiCards)
    const [isDiceAnimating, setDiceAnimating] = useState<boolean>(false)

    let rotate = 0
    let zIndex = cards.length

    const updateCards = cards.map((card) => {
        let newCardObj = { ...card, rotate, zIndex }
        zIndex--
        rotate += 5
        return newCardObj
    })



    return (
        <>
            {isScreenTypeMultiCards === false ? <section className='min-h-[100vh] lg:h-[100vh] flex flex-col lg:flex-row'>
                <section className='flex-1 pb-[15rem] lg:pb-0 lg:flex-auto lg:w-1/3 bg-orange-100 flex flex-row justify-center lg:justify-left'>
                    <Image width={0} height={0} sizes='100vw' className='h-[8rem] w-[16rem]' alt='My Signature (Suganth)' src={"/assets/images/my-sign.png"} />
                </section>
                <section className={`relative `} >
                    <section className={`${styles.cardContainer} absolute top-[50%] left-[50%] translate-y-[50%] translate-x-[-50%] lg:top-0 lg:left-0 lg:translate-y-0 lg:translate-x-0  h-full z-1 flex flex-col justify-center items-center`}>
                        {updateCards.map(card => {
                            return <section key={card.id} className={`${styles.card} ${isDiceAnimating === false && styles.paused} absolute flex flex-col justify-between p-6 min-h-[460px] lg:min-h-[570px] min-w-[250px] lg:min-w-[350px] rounded-[1.25rem] text-white`} style={{ background: `linear-gradient(45deg, ${card.gradient[0]}, ${card.gradient[1]})` }}>
                                <div className='flex flex-row'>
                                    <div className='text-md uppercase font-medium'>{card.tag}</div>
                                    <div className={`relative group hover:translate-x-[30%] hover:translate-y-[-30%] transition ${styles.imgCard}`}>
                                        <Image className={`absolute left-[-20px] top-20 ${styles.imgCardLeft}`} width={27} height={19} alt={card.tag} src={"/assets/images/gamepad-intro-left.png"} />
                                        <Image width={160} height={100} alt={card.tag} src={"/assets/images/gamepad-intro.png"} />
                                        <Image className={`absolute right-0 bottom-[-40px] ${styles.imgCardRight}`} width={40} height={21} alt={card.tag} src={"/assets/images/gamepad-intro-right.png"} />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2 pb-4'>
                                    <div className='uppercase text-2xl lg:text-3xl font-semibold'>
                                        {card.title}
                                    </div>
                                    <div className='text-xs lg:text-sm'>
                                        {card.description}
                                    </div>
                                </div>
                            </section>
                        })}
                    </section>
                </section>
                <section className='flex-1 pt-[15rem] pb-[2rem] lg:pt-0 lg:flex-auto lg:w-2/3 bg-black-100 flex flex-col justify-center items-center gap-20'>
                    <DiceAnimation isDiceAnimating={isDiceAnimating} setDiceAnimating={setDiceAnimating} />
                    <div className='flex gap-8 border border-2 p-4 border-gray-200'>
                        <div onClick={() => dispatch(setScreenTypeMultiCards(false))}>
                            <SingleGamepad isMultiCard={isScreenTypeMultiCards} />
                        </div>
                        <div onClick={() => dispatch(setScreenTypeMultiCards(true))}>
                            <MultiGamePad isMultiCard={isScreenTypeMultiCards} />
                        </div>
                    </div>
                </section>
            </section> : <section>
                <section className='flex flex-row justify-between bg-orange-100 px-[2rem] py-[1rem]'>
                    <Image width={0} height={0} sizes='100vw' className='h-[4rem] w-[8rem] lg:w-[16rem]' alt='My Signature (Suganth)' src={"/assets/images/my-sign.png"} />
                    <div className='flex gap-8 border border-2 p-4 border-gray-200'>
                        <div onClick={() => dispatch(setScreenTypeMultiCards(false))}>
                            <SingleGamepad isMultiCard={isScreenTypeMultiCards} />
                        </div>
                        <div onClick={() => dispatch(setScreenTypeMultiCards(true))}>
                            <MultiGamePad isMultiCard={isScreenTypeMultiCards} />
                        </div>
                    </div>
                </section>
                <section className='bg-black-100 flex flex-col lg:grid grid-cols-2 gap-y-[2rem] lg:gap-y-[8rem] p-[4rem] justify-items-center items-center'>
                    {updateCards.map(card => {
                        return <section key={card.id} className={`flex flex-col justify-between p-6 h-[500px] lg:h-[570px] w-[350px] lg:min-w-[350px] rounded-[1.25rem] text-white`} style={{ background: `linear-gradient(45deg, ${card.gradient[0]}, ${card.gradient[1]})` }}>
                            <div className='flex flex-row'>
                                <div className='text-md uppercase font-medium'>{card.tag}</div>
                                <div className={`relative group hover:translate-x-[30%] hover:translate-y-[-30%] `}>
                                    <Image className={`absolute left-[-20px] top-20 ${styles.imgCardLeft}`} width={27} height={19} alt={card.tag} src={"/assets/images/gamepad-intro-left.png"} />
                                    <Image width={160} height={100} alt={card.tag} src={"/assets/images/gamepad-intro.png"} />
                                    <Image className={`absolute right-0 bottom-[-40px] ${styles.imgCardRight}`} width={40} height={21} alt={card.tag} src={"/assets/images/gamepad-intro-right.png"} />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 pb-4'>
                                <div className='uppercase text-2xl lg:text-3xl font-semibold'>
                                    {card.title}
                                </div>
                                <div className='text-xs lg:text-sm'>
                                    {card.description}
                                </div>
                            </div>
                        </section>
                    })}
                </section>
            </section>
            }
        </>
    )
}

const DICES = [
    {
        id: 1,
        src: "/assets/images/dice-1.png",
        alt: "dice 1"
    },
    {
        id: 2,
        src: "/assets/images/dice-2.png",
        alt: "dice 2"
    },
    {
        id: 3,
        src: "/assets/images/dice-3.png",
        alt: "dice 3"
    },
    {
        id: 4,
        src: "/assets/images/dice-4.png",
        alt: "dice 4"
    }
]

const gen = generateSequence()

const DiceAnimation = ({ isDiceAnimating, setDiceAnimating }: { isDiceAnimating: boolean, setDiceAnimating: Function }) => {

    // const nextNumber = createRandomGenerator(4);
    // const nextNumber = shuffleGenerator()
    const [randomIndex, setRandomIndex] = useState(4)

    useEffect(() => {
        if (isDiceAnimating === false) {
            const randomIndex = gen.next().value || 4
            setRandomIndex(randomIndex)
        }
    }, [isDiceAnimating])

    const dice = DICES[randomIndex - 1]
    console.log("random index", randomIndex, dice)

    function onDiceAnimation() {
        setDiceAnimating(true)
        setTimeout(() => {
            setDiceAnimating(false)
        }, (1500))
    }

    return (
        <div className='flex flex-col items-center w-60 gap-10'>
            {
                isDiceAnimating === false ?
                    <div onClick={onDiceAnimation}>
                        <Image src={dice.src} height={80} width={104} alt={dice.alt} />
                        <Image src={"/assets/images/shuffle-arrow.png"} height={80} width={104} alt={dice.alt} />
                    </div> : <Image unoptimized src={"/assets/images/dice-animation.gif"} height={70} width={84} alt={dice.alt} />
            }
            <div className='text-white text-sm text-center'>
                Would like to know more about me, let's play some cards.
            </div>
        </div>
    )
}

const SingleGamepad = ({ isMultiCard }: { isMultiCard: boolean }) => {
    return (
        <div className={`rounded-full p-6 h-20 w-20 flex justify-center items-center translate-x-0 translate-y-0 group transition-all ${isMultiCard === false && "bg-green-100"}`}>
            <Image src={'/assets/images/gamepad-center.png'} alt='Gamepad image center' width={36} height={52} className={`${isMultiCard && 'transition-all	 group-hover:translate-y-[-30%]'} `} />
        </div>
    )
}

const MultiGamePad = ({ isMultiCard }: { isMultiCard: boolean }) => {
    return (
        <div className={`rounded-full p-6 h-20 w-20 flex justify-center items-center translate-x-0 translate-y-0 group z-[1] ${isMultiCard === true && "bg-green-100"} ${isMultiCard === false && styles.multiCard}`}>
            <Image src={'/assets/images/gamepad-left.png'} alt='Gamepad image center' width={36} height={52} className={`z-[1] relative left-[30%] ${isMultiCard === false && styles.multiCardLeft}`} />
            <Image src={'/assets/images/gamepad-center.png'} alt='Gamepad image center' width={36} height={52} className='z-[2]' />
            <Image src={'/assets/images/gamepad-right.png'} alt='Gamepad image center' width={36} height={52} className={`z-[1] relative left-[-30%] ${isMultiCard === false && styles.multiCardRight}`} />
        </div>
    )
}