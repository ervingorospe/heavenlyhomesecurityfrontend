import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { buttonVariants, fromLeft, fromRight } from 'constants/animation'
import { useInView } from 'react-intersection-observer';
import Section2Image from 'assets/images/section2-min.png'
import SideImage from 'assets/images/section_2-min.png'
import ReactMarkdown from 'react-markdown'

function SectionTwo ({ content }) {
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
          <ReactMarkdown className='text-gray-200 prose prose-yellow mt-10'>
            {content}
          </ReactMarkdown>

          <motion.button 
            className="mt-10 py-2 px-7 buttons bg-primary-600 hover:bg-primary-700 text-gray-100 font-sans"
            variants={buttonVariants}
            initial="initial"
            animate={animation}
            whileHover="hover"
          >
            Get a Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default SectionTwo;