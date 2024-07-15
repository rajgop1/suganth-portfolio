"use client"
import Header from '@/app/components/common/Header'
import { SinglePortfolioPageData, SinglePortfolioPageSchema } from '@/interface/api-interface'
import { useRouter } from 'next/navigation'
import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { IoHomeOutline } from 'react-icons/io5'
import { FaArrowLeft } from "react-icons/fa6";
import { Separator } from '@/app/components/common/Separator'
import ImageWrapper from '@/app/components/common/ImageWrapper'
import LetsGoForTea from '@/app/components/home/lets-go-for-tea'
import Email from '@/app/components/home/email'
import Footer from '@/app/components/common/Footer'

export default function SinglePageComponent({ data }: { data: SinglePortfolioPageData }) {

  const router = useRouter()

  return (
    <div className='bg-black-100 min-h-[100vh]'>
      <Header />
      <div className='px-6 pt-6 lg:px-20 lg:pt-20 text-white'>
        <div className='flex flex-row items-center justify-between gap-2'>
          <div className='flex flex-row gap-2 lg:gap-4 items-center '>
            <button onClick={() => router.back()} className='bg-green-100 flex items-center gap-2 text-black-100 rounded-full px-2 py-1 lg:px-3 lg:py-3'>
              <FaArrowLeft className='lg:w-[24px] lg:h-[24px]' />
              <div>
                BACK
              </div>
            </button>
            <IoHomeOutline className='text-green-100 lg:w-[28px] lg:h-[28px]' />
            <div className='text-xs lg:text-base text-gray-800 font-bold uppercase'>
              HOME / {' '} <span className='text-green-100'>{data.attributes.title}</span>
            </div>
          </div>
          <div className='uppercase flex flex-row gap-2 text-lg lg:text-3xl text-gray-300 font-bold items-center'>
            {data.attributes.organisation}
          </div>
        </div>
        <Separator />
        <div className='flex flex-col gap-[2rem]'>
          <h2 className='uppercase text-4xl font-bold text-center'>{data.attributes.title}</h2>
          <div className='px-[1rem] py-[1rem] rounded-[0.5rem] lg:px-[2rem] lg:py-[2rem] lg:rounded-[2rem] bg-gray-700 rounded-[2rem]'>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-row items-center justify-between'>
                <div className='font-bold uppercase text-gray-300 lg:text-2xl'>
                  {data.attributes.title}
                </div>
                <div className='flex flex-row gap-2'>
                  {data.attributes.ios && <div className='w-[1.5rem] h-[1.5rem] rounded-full overflow-hidden'>
                    <ImageWrapper alt={"ios"} src={"/assets/images/ios.png"} width={0} height={0} sizes='100vw' className='w-full h-full object-cover' />
                  </div>}
                  {data.attributes.web && <div className='w-[1.5rem] h-[1.5rem] rounded-full overflow-hidden'>
                    <ImageWrapper alt={"chrome"} src={"/assets/images/chrome.png"} width={0} height={0} sizes='100vw' className='w-full h-full object-cover' />
                  </div>}
                  {data.attributes.android && <div className='w-[1.5rem] h-[1.5rem] rounded-full overflow-hidden'>
                    <ImageWrapper alt={"android"} src={"/assets/images/android.png"} width={0} height={0} sizes='100vw' className='w-full h-full object-cover' />
                  </div>}
                </div>
              </div>
              <div className='h-[20rem] lg:h-[40rem] rounded-[1rem] overflow-hidden'>
                <ImageWrapper alt={data.attributes.thumbnail_image.data.attributes.alternativeText || ""} src={data.attributes.thumbnail_image.data.attributes.formats.large.url} width={0} height={0} sizes='100vw' className='w-full h-full object-cover' />
              </div>
            </div>
          </div>
          {
            data.attributes.singleport.map((project, index) => {
              const isOdd = index % 2 == 1
              return <div key={project.id} className={`flex flex-col gap-[1rem]`}>
                <div className={`flex gap-[1rem] flex-col ${isOdd ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                  <div className='flex-1 px-[1rem] py-[1rem] rounded-[0.5rem] lg:px-[2rem] lg:py-[2rem] lg:rounded-[2rem] flex items-center justify-center'>
                    <div className='h-[68%] w-[40%] overflow-hidden'>
                      <ImageWrapper alt={"gamepad-big"} src={isOdd ? "/assets/images/gamepad-big.png" : "/assets/images/gamepad-big.png"} width={0} height={0} sizes='100vw' className='w-full h-full object-cover' />
                    </div>
                  </div>
                  <div className='flex-1 px-[1rem] py-[1rem] rounded-[0.5rem] lg:px-[2rem] lg:py-[2rem] lg:rounded-[2rem] bg-gray-700 rounded-[2rem]'>
                    <div className='text-gray-300 font-bold'>
                      {project.description}
                    </div>
                  </div>
                </div>
                <div className='px-[1rem] py-[1rem] rounded-[0.5rem] lg:px-[2rem] lg:py-[2rem] lg:rounded-[2rem] bg-gray-700 rounded-[2rem] h-[20rem] lg:h-[30rem] w-full overflow-hidden'>
                  <ImageWrapper alt={project.banner_image.data.attributes.alternativeText || ""} src={project.banner_image.data.attributes.formats.large.url} width={0} height={0} sizes='100vw' className='w-full h-full object-cover' />
                </div>
              </div>
            })
          }
          <div className='px-[1rem] py-[1rem] rounded-[0.5rem] lg:px-[2rem] lg:py-[2rem] lg:rounded-[2rem] bg-gray-700 rounded-[2rem] grid md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]'>
            {
              data.attributes.relevent_images.data.map((img, index) => {
                return <div key={index} className='bg-gray-700 h-[16rem] lg:h-[20rem] rounded-[2rem] w-full overflow-hidden'>
                  <ImageWrapper alt={img.attributes.formats.large.url || ""} src={img.attributes.formats.large.url} width={0} height={0} sizes='100vw' className='w-full h-full object-cover' />
                </div>
              })
            }
          </div>
        </div>
        <div className='flex flex-col pt-[2rem] lg:pt-[4rem] lg:flex-row justify-center items-center gap-[2rem]'>
          <div className='h-[200px] w-[140px] lg:h-[400px] lg:w-[280px] overflow-hidden'>
            <ImageWrapper alt={"gamepad big bye"} src={"/assets/images/gamepad-big-bye.png"} width={0} height={0} sizes='100vw' className='w-full h-full object-cover' />
          </div>
          <div className='text-2xl lg:text-4xl font-bold text-gray-300 text-center'>It’s end, <br/>
            See you on next project</div>
        </div>
      </div>
      <LetsGoForTea />
      <Email />
      <Footer />
    </div>
  )
}
