import React from 'react';
import _ from 'lodash'
import PageLayout from 'layouts/PageLayout'
import { strapiQuery } from 'strapiApi/queries'
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
      />
      <SectionOne 
        title={_.get(homepage, "data.attributes.section1.title")} 
        features={_.get(homepage, "data.attributes.section1.feature")} 
      />
      <SectionTwo 
        content={_.get(homepage, 'data.attributes.section2')}
      />
      <SectionThree 
        title={_.get(homepage, "data.attributes.section3.title")} 
        services={_.get(homepage, "data.attributes.section3.services")} 
      />
    </PageLayout>
  )
}
 
export default Home;