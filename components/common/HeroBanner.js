import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { buttonVariants, button2Variants } from 'constants/animation'
import BannerImage from 'assets/images/heroImage-min.png'
import bg1 from 'assets/images/bg1-min.png'

function HeroBanner ({ firstTitle, secondTitle }) {
  return (
    <div className='relative grid grid-cols-1 md:grid-cols-2 gap-0 h-[30rem] md:h-[50rem] px-10'>
      <div className='absolute top-0 left-0 right-0 bottom-0 z-0'>
        <div className='w-full h-full relative'>
          <Image
            src={bg1}
            alt="bg image"
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>
      <div className='h-full grid content-center z-10'>
        <div className='grid justify-center'>
          <header className='w-fit mt-14'>
            <motion.h1 
              className='font-heading text-gray-100 hero-text'
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, type: 'spring', stiffness: 100 }}
            >
              {firstTitle}
            </motion.h1>
            <motion.h2 
              className='font-heading text-primary-600 hero-text2'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: [1, 1.2, 1] }}
              transition={{ type: 'spring' }}
            >
              {secondTitle}
            </motion.h2>
          </header>
          <div className='mt-2 grid md:flex md:gap-2'>
            <motion.button 
              className="w-8/12 md:w-fit md:ml-0 md:px-7 py-2 buttons bg-primary-600 hover:bg-primary-700 text-gray-100 font-sans"
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              Get a Quote
            </motion.button>
            <motion.button 
              className="w-8/12 md:w-fit mt-2 md:mt-0 md:px-7 py-2 buttons bg-primary-600 hover:bg-primary-700 text-gray-100 font-sans"
              variants={button2Variants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              Join Our Team
            </motion.button>
          </div>
        </div>
      </div>
      <div className='hidden h-full md:grid content-center'>
        <div className='flex justify-center'>
          <div className='w-fit mt-14'>
            <Image
              src={BannerImage}
              alt="Home Banner Image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner;