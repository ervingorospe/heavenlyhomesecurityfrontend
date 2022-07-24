import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { buttonVariants, fromLeft, fromRight } from 'constants/animation'
import { useInView } from 'react-intersection-observer';
import Section1Image from 'assets/images/monitoranywhere.png'

function SectionOne ({ title, features }) {
  const [enterAnimation, setEnterAnimation] = useState(false)
  const {ref, inView} = useInView({
    threshold: 0.7
  });

  const animation = useAnimation();
  const titleAnimation = useAnimation();
  const pictureAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start(buttonVariants.animate)
      titleAnimation.start(fromLeft.animate)
      pictureAnimation.start(fromRight.animate)
      setEnterAnimation(true)
    }
  }, [animation, inView, pictureAnimation, titleAnimation])

  return (
    <section ref={ref} className='grid grid-cols-1 md:grid-cols-2 gap-0 py-48 px-10'>
      <div className='h-full grid content-center'>
        <div className='w-11/12 md:w-7/12 m-auto grid justify-center'>
          <header className='block w-fit'>
            <motion.h1 
              className='font-heading hero-text text-primary-600'
              variants={fromLeft}
              initial="initial"
              animate={titleAnimation}
            >
              {title}
            </motion.h1>
          </header>
          
          {
            enterAnimation && (
              <ul 
                className='my-4 md:ml-5'
              >
                {
                  features.map((data, index) => (
                    <motion.li 
                      key={index} 
                      className='font-bold text-gray-700 py-1'
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{ type: 'spring', stiffness: 100, delay: index / 2 }}
                    >
                      <i className="fa-solid fa-caret-right"/> {data.description}
                    </motion.li>
                  ))
                }
              </ul>
            )
          }
          
          <div  className='flex mt-2 justify-center'>
            <motion.button 
              className="py-2 px-7  md:py-3 buttons bg-primary-600 hover:bg-primary-700 text-gray-100 font-sans"
              variants={buttonVariants}
              initial="initial"
              animate={animation}
              whileHover="hover"
            >
              Learn More <i className="fa-solid fa-arrow-right ml-1"/>
            </motion.button>
          </div>
        </div>
      </div>
      <div className='hidden h-full md:grid content-center'>
        <motion.div 
          className='w-full pr-20'
          variants={fromRight}
          initial="initial"
          animate={pictureAnimation}
        >
          <Image
            src={Section1Image}
            alt="Section one image"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default SectionOne;