import ImageWrapper from "../common/ImageWrapper";
import styles from "./landing.module.css"
export default function HomeAboutMeCard(){
    return <div className="grid lg:grid-cols-4 rounded-xl text-white overflow-hidden">
        <div className="group bg-[linear-gradient(to_right,#ACACAC,#4E4C4C)] px-4 py-3">
            <div className="uppercase text-lg font-bold">Intro</div>
            <div className="flex justify-end pb-8">
                <div className={`scale-0 group-hover:scale-100 w-fit relative group hover:translate-x-[30%] hover:translate-y-[-30%] transition ${styles.imgCard}`}>
                    <ImageWrapper className={`absolute left-[-20px] top-20 ${styles.imgCardLeft}`} width={17} height={10} alt="" src={"/assets/images/gamepad-intro-left.png"} />
                    <ImageWrapper width={100} height={60} alt="" src={"/assets/images/gamepad-intro.png"} />
                    <ImageWrapper className={`absolute right-0 bottom-[-20px] ${styles.imgCardRight}`} width={20} height={11} alt="" src={"/assets/images/gamepad-intro-right.png"} />
                </div>
            </div>
            <div className="uppercase text-2xl font-bold">multi-disciplinary UX & UI Design lead</div>
            <p className="text-md">A proficient communicator in design language and a versatile professional with expertise in both user experience and user interface design across multiple disciplines.</p>
        </div>
        <div className="group bg-[linear-gradient(to_right,#9878AD,#4E285E)] px-4 py-4">
            <div className="flex justify-between gap-8">
                <div className="flex flex-col shrink-0 justify-between">
                    <div className="text-right uppercase text-lg pb-2 font-bold [writing-mode:vertical-rl] rotate-180">language</div>    
                    <div className="flex pb-8">
                        <div className={`-scale-x-0 group-hover:-scale-x-100 w-fit relative group hover:translate-x-[30%] hover:translate-y-[-30%] transition ${styles.imgCard}`}>
                            <ImageWrapper className={`absolute left-[-20px] top-20 ${styles.imgCardLeft}`} width={17} height={10} alt="" src={"/assets/images/gamepad-intro-left.png"} />
                            <ImageWrapper width={100} height={60} alt="" src={"/assets/images/gamepad-intro.png"} />
                            <ImageWrapper className={`absolute right-0 bottom-[-20px] ${styles.imgCardRight}`} width={20} height={11} alt="" src={"/assets/images/gamepad-intro-right.png"} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uppercase text-2xl font-bold">Digital Design language speaker</div>
                    <p className="text-md">My primary focus is creating top-notch and memorable digital experiences. Passionate about AI and VR, I design immersive experiences that foster emotional connections. </p>
                </div>
            </div>
        </div>
        <div className="group bg-[linear-gradient(to_right,#AD7893,#5E2848)] px-4 py-3">
            <div className="flex gap-2 pt-6">
                <div className="flex flex-col gap-2 ">
                    <div className="uppercase text-2xl font-bold">Using design thinking, to solve problems</div>
                    <p className="text-md">Every digital product/design has a unique story, and it's essential for me to convey yours specifically. I excel in team leadership, mentorship, and aligning design with business goals.</p>
                </div>
                <div className="flex flex-col justify-between shrink-0">
                    <div className="flex justify-end pb-8">
                        <div className={`scale-0 group-hover:scale-100 w-fit relative group hover:translate-x-[30%] hover:translate-y-[-30%] transition ${styles.imgCard}`}>
                            <ImageWrapper className={`absolute left-[-20px] top-20 ${styles.imgCardLeft}`} width={17} height={10} alt="" src={"/assets/images/gamepad-intro-left.png"} />
                            <ImageWrapper width={100} height={60} alt="" src={"/assets/images/gamepad-intro.png"} />
                            <ImageWrapper className={`absolute right-0 bottom-[-20px] ${styles.imgCardRight}`} width={20} height={11} alt="" src={"/assets/images/gamepad-intro-right.png"} />
                        </div>
                    </div>
                    <div className="uppercase text-lg font-bold">Experience</div>
                </div>
            </div>
        </div>
        <div className="group bg-[linear-gradient(to_right,#7884AD,#29285E)] px-4 py-3">
        <div className="uppercase text-lg font-bold">creative</div>
            <div className="uppercase text-2xl font-bold">thinking of creative</div>
            <p className="text-md">I enjoy thinking of creative approaches to keep ahead of the game. My work blends creativity, innovation, and functionality to deliver impactful results.</p>
            <div className="flex justify-end pb-8">
                <div className={`scale-0 group-hover:scale-100 w-fit relative group hover:translate-x-[30%] hover:translate-y-[-30%] transition ${styles.imgCard}`}>
                    <ImageWrapper className={`absolute left-[-20px] top-20 ${styles.imgCardLeft}`} width={17} height={10} alt="" src={"/assets/images/gamepad-intro-left.png"} />
                    <ImageWrapper width={100} height={60} alt="" src={"/assets/images/gamepad-intro.png"} />
                    <ImageWrapper className={`absolute right-0 bottom-[-20px] ${styles.imgCardRight}`} width={20} height={11} alt="" src={"/assets/images/gamepad-intro-right.png"} />
                </div>
            </div>
        </div>
    </div>
}
