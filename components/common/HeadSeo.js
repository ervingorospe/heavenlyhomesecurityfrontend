import Head from 'next/head'
import React, { Component } from "react";

function HeaderSeo({ metas, title }) {
  return (
    <Head>
      <title>{`Heavenly Home Security | ${title}`}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <meta name="description" content="" />
      <meta name="msapplication-TileColor" content="#27272a" />
      <meta name="theme-color" content="#27272a" />
      {
        metas.map((data, index) => (
          <meta property={data.type} content={data.content} key={index}/>
        ))
      }
    </Head>
  );
}
 
export default HeaderSeo;