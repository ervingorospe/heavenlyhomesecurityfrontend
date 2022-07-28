/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { Links } from 'constants/navs'
import Image from 'next/image'
import Logo from 'assets/images/logo.svg'
import Link from 'next/link'

function MainNav({ changeNav }) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div>
      <div className={`${ changeNav && ('shadow-sm shadow-primary-600 bg-primary-600') } w-full fixed text-gray-100 navbar z-40`}>
        <div className='flex items-center justify-between bg-white py-8 md:py-4 md:px-10 px-7 mt-2'>
          <div className='relative'>
            <header className='fixed top-4'>
              <Link href='/'>
                <a>
                  <Image
                    src={Logo}
                    alt="Logo"
                  />
                </a>
              </Link>
            </header>
          </div>
          <nav className='hidden lg:grid'>
            <ul className='md:flex md:items-center'>
              {
                Links.map(link => (
                  <li key={link.name} className='md:mr-8 text-sm nav-link'>
                    <Link href={link.link}>
                      <a className='hover:text-primary-300 duration-75'>{link.name}</a>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </nav>
          <div className='flex z-40'>
            <ul className='hidden md:flex'>
              <li className='text-sm nav-link font-bold'>
                <a href='tel:225-274-1050' className='hover:text-primary-300 duration-75'>225-274-1050</a>
              </li>
              <li className='md:ml-4 text-sm font-bold'>
                <a className="ni-social" href="https://www.google.com/maps?q=1907+Beaumont+Dr.+Baton+Rouge,+LA+70806&um=1&ie=UTF-8&sa=X&ved=0ahUKEwiD5e7CvKLVAhUIbiYKHXp0B9oQ_AUICigB" rel="noreferrer" target="_blank">
                  <img src="http://webgallerydisplay.com/ez_img/808/63713.png" width="22" height="22" alt="heavenlyhomessecurity map"/>
                </a>
              </li>
            </ul>
            <div className='grid -mt-1 ml-7 lg:hidden'>
              <button onClick={() => setShowMenu(!showMenu)}>
                <i className="fa-solid fa-bars text-lg"/>
              </button>
              
            </div>
          </div>
        </div>
      </div>
      <nav className={`fixed w-full py-4 flex bg-primary-600 lg:hidden transition-all duration-500 ease-in-out z-30 ${showMenu ? 'top-0' : 'top-[-490px]'}`}>
        <ul className='grid md:items-left mt-28 text-gray-100'>
          {
            Links.map(link => (
              <li key={link.name} className='md:mr-8 text-sm nav-link py-2 px-7'>
                <Link href={link.link}>
                  <a className='hover:text-primary-300 duration-75'>{link.name}</a>
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}

export default MainNav