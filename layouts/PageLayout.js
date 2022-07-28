import React, { useEffect, useState } from 'react'
import HeaderSeo from 'components/common/HeadSeo';
import MainNav from 'components/common/MainNavs';
import Footer from 'components/common/Footer';

function PageLayout({ title, children, metas }) {
  const [changeNav, setChangeNav] = useState(false)

  useEffect(() => {
    window.onscroll = function() {
      if(window.pageYOffset === 0) {
        setChangeNav(false)
      }

      if(window.pageYOffset > 0) {
        setChangeNav(true)
      }
    };
  }, [])

  return (
    <div>
      <HeaderSeo title={title} metas={metas}/>
      <MainNav changeNav={changeNav}/>
      <main className="w-full">
        {children}
      </main>
      <Footer/>
    </div>
  )
}
 
export default PageLayout;