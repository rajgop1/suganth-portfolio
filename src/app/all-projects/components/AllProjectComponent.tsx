"use client"
import React, { useState } from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Separator } from '@/app/components/common/Separator';
import { useRouter } from 'next/navigation';
import { MultiPortfolioPageSchema } from '@/interface/api-interface';
import ImageWrapper from '@/app/components/common/ImageWrapper';

import { GoArrowRight } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";


export default function AllProjectComponent({ data }: { data: MultiPortfolioPageSchema }) {
  const currentProject = "FACTSET"
  const router = useRouter()
  const [openHamburger, setOpenHamburger] = useState(false)
  const [selectedPage, setSelectedPage] = useState(data.data[0])
  console.log("data all project component", data)



  return (
    <section className='px-6 pt-6 lg:px-20 lg:pt-20'>
      <div className='flex flex-row items-center justify-between gap-2'>
        <div className='flex flex-row gap-2 items-center '>
          <IoHomeOutline className='text-green-100 ' width={24} height={24} />
          <div className='text-xs lg:text-base text-gray-800 font-bold uppercase'>
            HOME / ALL PROJECT / {' '} <span className='text-green-100'>{currentProject}</span>
          </div>
        </div>
        <div className='hidden uppercase lg:flex flex-row gap-2 text-lg lg:text-2xl text-white items-center'>
            ALL PROJECTS
            <button onClick={() => router.back()} className='bg-green-100 text-black-100 rounded-full px-2 py-2 lg:px-2 lg:py-1'>
              <IoMdClose className='lg:w-[32px] lg:h-[32px]' />
            </button>
          </div>
      </div>
      <Separator />
      <div className='flex flex-col gap-[1rem]'>
        <div className={`lg:hidden flex flex-row items-center justify-between`}>
          {
            <div className={`${openHamburger === false ? "block" : "hidden"} sticky cursor-pointer top-[1rem] bg-gray-700 h-fit w-fit p-2`} onClick={() => setOpenHamburger(true)}>
              <GiHamburgerMenu size={32} className='text-white' title='Check Other Portfolios' />
            </div>
          }
          <div className='uppercase flex flex-row gap-2 text-lg lg:text-2xl text-white items-center'>
            ALL PROJECTS
            <button onClick={() => router.back()} className='bg-green-100 text-black-100 rounded-full px-2 py-2 lg:px-2 lg:py-1'>
              <IoMdClose className='lg:w-[32px] lg:h-[32px]' />
            </button>
          </div>
        </div>
        <div className='flex gap-[2rem] lg:gap-[3rem]'>
          {<div className={`${openHamburger === false ? "hidden" : "flex"} lg:flex flex-col gap-4 left fixed top-0 left-0 w-full h-full px-[2rem] py-[2rem] bg-gray-700 lg:px-0 lg:bg-transparent lg:sticky lg:top-[2rem] lg:h-fit lg:w-auto`}>
            <div className='flex flex-row justify-center'>
              <button onClick={() => setOpenHamburger(false)} className='lg:hidden bg-green-100 text-black-100 rounded-full px-1 py-1 lg:px-2 lg:py-1 mb-[2rem]'>
                <IoMdClose className='w-[32px] h-[32px]' />
              </button>
            </div>
            {data.data.map((project) => {
              console.log("attributes", project.attributes.thumbnail_image.data.attributes.url)
              return <button key={project.id} className={`relative flex flex-row items-center rounded-[1rem] px-[1rem] py-[0.5rem] pr-[1rem] lg:pr-[4rem] gap-4 border border-1 border-gray-100 w-full ${project.id === selectedPage.id && "border-green-100"} `} onClick={() => setSelectedPage(project)}>
                <div className='w-[3rem] h-[3rem] rounded-full overflow-hidden'>
                  <ImageWrapper alt={project.attributes.thumbnail_image.data.attributes.alternativeText || ""} src={project.attributes.thumbnail_image.data.attributes.formats.thumbnail.url} width={0} height={0} sizes='100vw' className='w-full h-full object-cover' />
                </div>
                <div className='uppercase text-white'>{project.attributes.sector}</div>
                {project.id === selectedPage.id && <div className='absolute top-[50%] translate-y-[-50%] translate-x-[50%] right-[0%] p-1.5 rounded-full bg-green-100'>
                  <GoArrowRight size={32} />
                </div>}
              </button>
            })}
          </div>}
          <div className='right flex-1 flex flex-col gap-[1rem]'>
            <div className='px-[1rem] py-[1rem] rounded-[0.5rem] lg:px-[2rem] lg:py-[2rem] lg:rounded-[2rem] bg-gray-700 rounded-[2rem]'>
              <div className='flex flex-col gap-6'>
                <div className='flex flex-row items-center justify-between'>
                  <div className='font-bold uppercase text-gray-300 lg:text-2xl'>
                    {selectedPage.attributes.project_name}
                  </div>
                  <div className='flex flex-row gap-2'>
                    {selectedPage.attributes.ios && <div className='w-[1.5rem] h-[1.5rem] rounded-full overflow-hidden'>
                      <ImageWrapper alt={"ios"} src={"/assets/images/ios.png"} width={0} height={0} sizes='100vw' className='w-full h-full object-cover' />
                    </div>}
                    {selectedPage.attributes.web && <div className='w-[1.5rem] h-[1.5rem] rounded-full overflow-hidden'>
                      <ImageWrapper alt={"chrome"} src={"/assets/images/chrome.png"} width={0} height={0} sizes='100vw' className='w-full h-full object-cover' />
                    </div>}
                    {selectedPage.attributes.android && <div className='w-[1.5rem] h-[1.5rem] rounded-full overflow-hidden'>
                      <ImageWrapper alt={"android"} src={"/assets/images/android.png"} width={0} height={0} sizes='100vw' className='w-full h-full object-cover' />
                    </div>}
                  </div>
                </div>
                <div className='h-[20rem] rounded-[1rem] overflow-hidden'>
                  <ImageWrapper alt={selectedPage.attributes.thumbnail_image.data.attributes.alternativeText || ""} src={selectedPage.attributes.thumbnail_image.data.attributes.formats.large.url} width={0} height={0} sizes='100vw' className='w-full h-full object-cover' />
                </div>
              </div>
            </div>
            {
              selectedPage.attributes.multiport.map((project, index) => {
                const isOdd = index % 2 == 1
                return <div key={project.id} className={`flex flex-col gap-[1rem]`}>
                  <div className={`flex gap-[1rem] flex-col ${isOdd ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                    <div className='flex-1 px-[1rem] py-[1rem] rounded-[0.5rem] lg:px-[2rem] lg:py-[2rem] lg:rounded-[2rem] bg-gray-700 rounded-[2rem]'>
                      <div className='h-full w-full overflow-hidden'>
                        <ImageWrapper alt={project.image.data.attributes.alternativeText || ""} src={project.image.data.attributes.formats.large.url} width={0} height={0} sizes='100vw' className='w-full h-full object-cover' />
                      </div>
                    </div>
                    <div className='flex-1 px-[1rem] py-[1rem] rounded-[0.5rem] lg:px-[2rem] lg:py-[2rem] lg:rounded-[2rem] bg-gray-700 rounded-[2rem]'>
                      <div className='text-gray-300 font-bold'>
                        {project.description}
                      </div>
                    </div>
                  </div>
                  <div className='px-[1rem] py-[1rem] rounded-[0.5rem] lg:px-[2rem] lg:py-[2rem] lg:rounded-[2rem] bg-gray-700 rounded-[2rem] h-[16rem] w-full overflow-hidden'>
                    <ImageWrapper alt={project.banner_image.data.attributes.alternativeText || ""} src={project.banner_image.data.attributes.formats.large.url} width={0} height={0} sizes='100vw' className='w-full h-full object-cover' />
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}
