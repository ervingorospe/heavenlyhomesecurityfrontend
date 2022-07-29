import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { buttonVariants, fromBottom } from 'constants/animation'
import { useInView } from 'react-intersection-observer';

function SectionThree ({ title, services }) {
  const [enterAnimation, setEnterAnimation] = useState(false)
  const {ref, inView} = useInView({
    threshold: 0.7
  });

  const titleAnimation = useAnimation();
  const buttonAnimation = useAnimation()

  useEffect(() => {
    if (inView) {
      titleAnimation.start(fromBottom.animate)
      buttonAnimation.start(buttonVariants.animate)
      setEnterAnimation(true)
    }
  }, [buttonAnimation, inView, titleAnimation])

  return (
    <section ref={ref} className='grid grid-cols-1 justify-center gap-0 md:mt-10 py-28'>
      <header className='text-center'>
        <motion.h1 
          className='font-heading text-primary-600'
          variants={fromBottom}
          initial="initial"
          animate={titleAnimation}
        >
          {title}
        </motion.h1>
      </header>

      {
        enterAnimation && (
          <div className='grid m-auto gap-10 mt-10 grid-cols-1 md:grid-cols-5 lg:px-48'>
            {
              services.map((data,index) => (
                <motion.div className='text-center my-7' key={index}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{ type: 'spring', stiffness: 100, delay: index / 2 }}
                >
                  <div>
                    <i className={`${data.icon} text-7xl text-gray-400`}/>
                  </div>
                  <p className='w-8/12 mt-2 m-auto font-bold'>
                    {data.description}
                  </p>
                </motion.div>
              ))
            }
          </div>
        )
      }
      

      <div className='text-center mt-10'>
        <motion.button 
          className="py-2 px-7 buttons bg-primary-600 hover:bg-primary-700 text-gray-100 font-sans"
          variants={buttonVariants}
          initial="initial"
          animate={buttonAnimation}
          whileHover="hover"
        >
          Learn More <i className="fa-solid fa-arrow-right ml-1"/>
        </motion.button>
      </div>
    </section>
  )
}

export default SectionThree;