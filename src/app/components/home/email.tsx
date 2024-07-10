"use client"
import React, { FormEvent, ReactElement, useRef } from 'react'
import FormInput from '../form/form-input'
import Link from 'next/link'
import ImageWrapper from '../common/ImageWrapper'
import emailjs from 'emailjs-com';

const EMAIL_CONFIG = {
    serviceId: "service_jdkswzr",
    templateId: "template_lnh5ckc",
    publicKey: "S60Taq-wgxAOClXKU"
}

export default function Email() {

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(form.current){
            try {
                const result = await emailjs.sendForm(EMAIL_CONFIG.serviceId, EMAIL_CONFIG.templateId, form.current, EMAIL_CONFIG.publicKey)
                alert(`Message Sent: ${result.text}`)
                console.log("message sent: ", result)
                form.current.reset()
            } catch (err) {
                console.error("Error email:", err)
            }
        }else{
            alert("No Form ref")
        }
    };

    return (
        <section className='px-20 pt-20 bg-black-100 text-white flex justify-between'>
            <form onSubmit={(e)=>sendEmail(e)} ref={form} className='flex flex-col gap-4'>
                <FormInput name='from_name' placeholder='Full Name' />
                <FormInput name='phone_email' placeholder='Contact Mail/Phone #' />
                <FormInput name='message' placeholder='Message' submit={{ show: true, onSubmitHandler:()=>{} }} />
            </form>
            <div className='flex flex-1 flex-col justify-center items-center gap-4'>
                <div className='uppercase font-medium'>Connect with me</div>
                <div className='flex flex-row gap-2 justify-end'>
                    <Link href="/" className='bg-black-200 border border-gray-400 p-[8px] flex flex-row justify-center items-center rounded-full h-[35px] w-[35px]'>
                        <ImageWrapper src="/assets/images/gmail.png" alt='Gmail' width={200} height={200} className='w-full h-full object-contain' />
                    </Link>
                    <Link href="/" className='bg-black-200 border border-gray-400 p-[8px] flex flex-row justify-center items-center rounded-full h-[35px] w-[35px]'>
                        <ImageWrapper src="/assets/images/instagram.png" alt='Instagram' width={200} height={200} className='w-full h-full object-contain' />
                    </Link>
                    <Link href="/" className='bg-black-200 border border-gray-400 p-[8px] flex flex-row justify-center items-center rounded-full h-[35px] w-[35px]'>
                        <ImageWrapper src="/assets/images/linkedin.png" alt='Linkedin' width={200} height={200} className='w-full h-full object-contain' />
                    </Link>
                    <Link href="/" className='bg-black-200 border border-gray-400 p-[8px] flex flex-row justify-center items-center rounded-full h-[35px] w-[35px]'>
                        <ImageWrapper src="/assets/images/whatsapp.png" alt='Whatsapp' width={200} height={200} className='w-full h-full object-contain' />
                    </Link>
                </div>
            </div>
        </section>
    )
}
