import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { buttonVariants, fromLeft, fromRight } from 'constants/animation'
import { useInView } from 'react-intersection-observer';
import Section1Image from 'assets/images/secion1Image.png'


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
    <section ref={ref} className='px-10 lg:px-48 relative grid grid-cols-1 md:grid-cols-2 md:mt-10 py-28'>
      <div>
        <header className='w-full text-left'>
          <motion.h1 
            className='font-heading hero-text text-primary-600'
            variants={fromLeft}
            initial="initial"
            animate={titleAnimation}
          >
            {title}
          </motion.h1>
        </header>

        <ul 
            className='my-4 h-fit md:ml-5 m-auto text-left'
          >
            {
              enterAnimation && (
                features.map((data, index) => (
                  <motion.li 
                    key={index} 
                    className='font-extrabold text-[#C8B55F] py-2'
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{ type: 'spring', stiffness: 100, delay: index / 2 }}
                  >
                    <i className="fa-solid fa-caret-right mr-1"/> {data.description}
                  </motion.li>
                ))
              )
            }
          </ul>

          <motion.button 
            className="py-2 mt-4 px-7 buttons bg-primary-600 hover:bg-primary-700 text-gray-100 font-sans"
            variants={buttonVariants}
            initial="initial"
            animate={animation}
            whileHover="hover"
          >
            Learn More <i className="fa-solid fa-arrow-right ml-1"/>
          </motion.button>
      </div>
      <motion.div 
        className='hidden md:flex justify-center'
        variants={fromRight}
        initial="initial"
        animate={pictureAnimation}
      >
        <Image
          src={Section1Image}
          alt="Section one image"
          height={600}
          width={600}
        />
      </motion.div>
    </section>
  )
}

export default SectionOne;