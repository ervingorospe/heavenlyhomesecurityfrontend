import React, { Component } from 'react'
import HeaderSeo from 'components/common/HeadSeo';
import MainNav from 'components/common/MainNavs';
import Footer from 'components/common/Footer';

function PageLayout({ title, children, metas }) {
  return (
    <div>
      <HeaderSeo title={title} metas={metas}/>
      <MainNav/>
      <main className="w-full">
        {children}
      </main>
      <Footer/>
    </div>
  )
}
 
export default PageLayout;