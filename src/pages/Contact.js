import React from 'react'
import logo from '../assets/LOGO PNG.png'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import {IoLogoGoogleplus} from "react-icons/io"

function Contact() {
  return (
    <div className='bg-stone-900 w-full h-[400px] flex flex-col items-center'>
      <img src={logo} className='w-52 h-40'/>
      <p className='text-white my-5'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
      <div className='flex flex-row mt-10'>
        <div className='w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mx-2'>
            <BsTwitter className='text-white'/>
        </div>
        <div className='w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mx-2'>
            <FaFacebookF className='text-white'/>
        </div>
        <div className='w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mx-2'>
            <BsInstagram className='text-white'/>
        </div>
        <div className='w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mx-2'>
            <IoLogoGoogleplus className='text-white'/>
        </div>
      </div>
    </div>
  )
}

export default Contact
