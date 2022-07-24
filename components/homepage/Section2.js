import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { buttonVariants, fromLeft, fromRight } from 'constants/animation'
import { useInView } from 'react-intersection-observer';
import Section2Image from 'assets/images/home_entertainment.jpg'

function SectionTwo ({ title1, title2, description }) {
  const {ref, inView} = useInView({
    threshold: 0.7
  });

  const animation = useAnimation();
  const leftAnimation = useAnimation();
  const rightAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start(buttonVariants.animate)
      leftAnimation.start(fromLeft.animate)
      rightAnimation.start(fromRight.animate)
    }
  }, [animation, inView, rightAnimation, leftAnimation])

  return (
    <section ref={ref} className='grid grid-cols-1 md:grid-cols-2 gap-0 mt-4'>
      <motion.div 
        className='hidden md:grid'
        variants={fromLeft}
        initial="initial"
        animate={leftAnimation}
      >
        <Image
          src={Section2Image}
          alt="Section two image"
          className='hidden section-image'
          height={1500}
        />
      </motion.div>
      <motion.div 
        className='py-20 grid content-center hero-banner'
        variants={fromRight}
        initial="initial"
        animate={rightAnimation}
      >
        <div className='grid justify-center'>
          <header className='text-center'>
            <h1 className='font-heading hero-text text-gray-200'>{title1}</h1>
            <h2 className='font-heading title2 text-gray-200'>{title2}</h2>
          </header>

          <div className='flex justify-center mt-4'>
            <hr className="solid w-11/12 md:w-1/2"/>
          </div>

          <div className='flex justify-center'>
            <article className='w-9/12 indent-10 font-bold text-gray-900 mt-7'>
              {description}
            </article>
          </div>
          
          <div className='mt-10 text-center'>
            <motion.button 
              className="py-2 px-7 md:py-3 buttons bg-primary-600 hover:bg-primary-700 text-gray-100 font-sans"
              variants={buttonVariants}
              initial="initial"
              animate={animation}
              whileHover="hover"
            >
              <i className="fa-solid fa-house-lock mr-1"/> Get a Quote
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default SectionTwo;