import React from 'react';
import _ from 'lodash'
import PageLayout from 'layouts/PageLayout'
import { strapiQuery } from 'strapiApi/queries'
import BannerImage from 'assets/images/home-banner-image.png'
import Section1Image from 'assets/images/monitoranywhere.png'
import Section2Image from 'assets/images/home_entertainment.jpg'
import HeroBanner from 'components/common/HeroBanner'
import SectionOne from 'components/homepage/Section1'
import SectionTwo from 'components/homepage/Section2'
import SectionThree from 'components/homepage/Section3'
import { homepageQuery } from 'queries'

export async function getStaticProps(context) { 
  return {
    props: await strapiQuery(homepageQuery)
  };
}

function Home({ homepage }) {

  return (
    <PageLayout title="Home" metas={_.get(homepage, "data.attributes.meta")}>
      <HeroBanner 
        firstTitle={_.get(homepage, "data.attributes.hero.title1")}
        secondTitle={_.get(homepage, "data.attributes.hero.title2")} 
        image={BannerImage}
      />
      <SectionOne 
        title={_.get(homepage, "data.attributes.section1.title")} 
        features={_.get(homepage, "data.attributes.section1.feature")} 
        image={Section1Image}
      />
      <SectionTwo 
        title1={_.get(homepage, "data.attributes.section2.title1")} 
        title2={_.get(homepage, "data.attributes.section2.title2")} 
        description={_.get(homepage, "data.attributes.section2.description")} 
        image={Section2Image}
      />
      <SectionThree 
        title={_.get(homepage, "data.attributes.section3.title")} 
        services={_.get(homepage, "data.attributes.section3.services")} 
      />
    </PageLayout>
  )
}
 
export default Home;