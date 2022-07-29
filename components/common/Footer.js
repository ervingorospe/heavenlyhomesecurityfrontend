import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { buttonVariants } from 'constants/animation'
import footerLogo from 'assets/images/logo-white.svg'
import Link from 'next/link'
import { Links } from 'constants/navs'


function Footer () {
  return (
    <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:mt-10 px-10 bg-primary-600 py-20'>
      <div className='text-center hidden lg:grid'>
        <Image
          src={footerLogo}
          alt="Footer image"
        />
      </div>
      <div className='text-left mt-2'>
        <header>
          <h1 className='font-heading text-gray-100 contact-text'>Contact Us</h1>
          <h2 className='font-heading text-xl text-gray-100'>Call today for a free, no-obligation home security evaluation</h2>
        </header>

        <div className='mt-4'>
          <p className='text-gray-100 font-bold text-sm'>
            <i className="fa-solid fa-phone-flip mr-1"/> 225-274-150
          </p>
          <p className='text-gray-100 font-bold text-sm'>
            <i className="fa-solid fa-map mr-1"/> 1907 Beaumont Dr. Baton Rouge, LA 70806
          </p>
        </div>
        
        <motion.button 
          className="mt-4 px-7 py-2 buttons hover:bg-primary-700 text-gray-100 font-sans footer-button"
          variants={buttonVariants}
          whileHover="hover"
        >
          Get a Quote
        </motion.button>
      </div>

      <div className='grid w-8/12 mt-2'>
        <nav>
          <header>
            <h2 className='font-heading text-xl text-gray-100'>Menu</h2>
          </header>
          <ul className='mt-4 mr-10 inline-block w-fit text-gray-100'>
            {
              Links.slice().splice(0, 3).map(link => (
                <li key={link.name} className='text-sm nav-link'>
                  <Link href={link.link}>
                    <a className='hover:text-primary-300 duration-75'>{link.name}</a>
                  </Link>
                </li>
              ))
            }
          </ul>
          <ul className='w-fit inline-block text-gray-100'>
            {
              Links.slice().splice(-3).map(link => (
                <li key={link.name} className='text-sm nav-link'>
                  <Link href={link.link}>
                    <a className='hover:text-primary-300 duration-75'>{link.name}</a>
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;