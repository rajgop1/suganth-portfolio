"use client"
import React from 'react'
import styles from "./form.module.css"

export default function FormInput({ name = "Name", placeholder = "placeholder", submit = { show: false, onSubmitHandler: (e: React.FormEvent<HTMLButtonElement>) => { } } }) {
  return (
    <div className='py-1 border-b-[2px] border-gray-200 flex justify-between items-center w-full'>
      <input name={name} placeholder={placeholder} className={`${styles.placeholderColor} flex-1 outline-none bg-transparent text-xl lg:text-6xl`} />
      {submit.show && <button type='submit' className='bg-gradient-to-br from-[#3C3C3C] to-[#070809] px-[1rem] py-[0.5rem] lg:px-[2rem] lg:py-[1.5rem] rounded-full border border-2 border-gray-200 text-green-100 lg:text-xl text-sm'>
        &rarr;
      </button>}
    </div>
  )
}
