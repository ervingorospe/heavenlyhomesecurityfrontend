import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { buttonVariants, fromLeft, fromRight } from 'constants/animation'
import { useInView } from 'react-intersection-observer';
import Section2Image from 'assets/images/section2.png'
import SideImage from 'assets/images/section_2.png'

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
    <section ref={ref} className='relative grid md:mt-10 py-28'>
      <div className='absolute top-0 left-0 right-0 bottom-0 z-0'>
        <div className='w-full h-full relative'>
          <Image
            src={Section2Image}
            alt="bg image"
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>
      <div
        className='grid md:grid-cols-2 gap-4 z-10 px-10 lg:px-48'
        variants={fromLeft}
        initial="initial"
        animate={leftAnimation}
      >
        <motion.div 
          className='hidden md:flex'
          variants={fromLeft}
          initial="initial"
          animate={leftAnimation}
        >
          <Image
            src={SideImage}
            alt="Section two image"
            height={450}
            width={500}
          />
        </motion.div>
        <motion.div
          variants={fromRight}
          initial="initial"
          animate={rightAnimation}
        >
          <header className='text-left'>
            <h1 className='font-heading hero-text text-primary-600'>{title1}</h1>
            <h2 className='font-heading title2 text-gray-200'>{title2}</h2>
          </header>

          <article className='w-9/12 font-bold text-gray-200 mt-7'>
            {description}
          </article>

          <motion.button 
            className="mt-4 py-2 px-7 buttons bg-primary-600 hover:bg-primary-700 text-gray-100 font-sans"
            variants={buttonVariants}
            initial="initial"
            animate={animation}
            whileHover="hover"
          >
            Get a Quote
          </motion.button>
        </motion.div>
      </div>
      <div className='h-full grid z-10'>
        
        {/* <motion.div 
          className=''
          variants={fromLeft}
          initial="initial"
          animate={leftAnimation}
        >
          <div className='w-fit grid justify-center text-center border border-blue-600'>
            

            <div className='flex justify-center'>
              
            </div>
            
            <div className='mt-10 text-center'>
              <motion.button 
                className="py-2 px-7 md:py-2 buttons bg-primary-600 hover:bg-primary-700 text-gray-100 font-sans"
                variants={buttonVariants}
                initial="initial"
                animate={animation}
                whileHover="hover"
              >
                Get a Quote
              </motion.button>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}

export default SectionTwo;