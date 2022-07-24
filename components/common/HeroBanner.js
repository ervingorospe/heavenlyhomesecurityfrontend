import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { buttonVariants, button2Variants } from 'constants/animation'

function HeroBanner ({ firstTitle, secondTitle, image }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-0 h-[45rem] hero-banner px-10'>
      <div className='h-full grid content-center'>
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
              className='font-heading text-gray-100 hero-text2'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: [1, 1.2, 1] }}
              transition={{ type: 'spring' }}
            >
              {secondTitle}
            </motion.h2>
          </header>
          <div className='mt-2'>
            <motion.button 
              className="ml-3 w-8/12 md:w-fit md:ml-0 py-2 md:px-7 md:py-3 buttons bg-primary-600 hover:bg-primary-700 text-gray-100 font-sans"
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <i className="fa-solid fa-house-lock mr-1"/> Get a Quote
            </motion.button>
            <motion.button 
              className="w-8/12 md:w-fit mt-2 md:mt-0 ml-3 py-2 md:px-7 md:py-3 buttons bg-primary-600 hover:bg-primary-700 text-gray-100 font-sans"
              variants={button2Variants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <i className="fa-solid fa-people-group mr-1"/> Join Our Team
            </motion.button>
          </div>
        </div>
      </div>
      <div className='hidden h-full md:grid content-center'>
        <div className='flex justify-center'>
          <div className='w-fit mt-14'>
            <Image
              src={image}
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