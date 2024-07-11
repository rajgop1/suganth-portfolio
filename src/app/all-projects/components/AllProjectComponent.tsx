"use client"
import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Separator } from '@/app/components/common/Separator';
import { useRouter } from 'next/navigation';


export default function AllProjectComponent({ children }:{children:React.ReactNode}) {
  const currentProject = "FACTSET"
  const router = useRouter()
  return (
    <section className='px-6 pt-6 lg:px-20 lg:pt-20'>
      <div className='flex flex-row items-center justify-between gap-2'>
        <div className='flex flex-row gap-2 items-center '>
          <IoHomeOutline className='text-green-100 ' width={24} height={24} />
          <div className='text-xs lg:text-base text-gray-800 font-bold uppercase'>
            HOME / ALL PROJECT / {' '} <span className='text-green-100'>{currentProject}</span>
          </div>
        </div>
        <div className='uppercase flex flex-row gap-2 text-lg lg:text-2xl text-white items-center'>
          ALL PROJECTS
          <button onClick={()=>router.back()} className='bg-green-100 text-black-100 rounded-full px-1 py-0.5 lg:px-2 lg:py-1'>
            <IoMdClose className='lg:w-[32px] lg:h-[32px]' />
          </button>
        </div>
      </div>
      <Separator />
      <div>
        {children}
      </div>
    </section>
  )
}
