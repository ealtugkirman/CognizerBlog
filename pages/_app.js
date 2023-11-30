import React from 'react';
import Head from 'next/head';
import '../styles/globals.scss';
import { NextSeo } from 'next-seo';
import Script from 'next/script';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="thecognizer.com"
        name="robots"
        content="index,follow"
        description="The Cognizer is a publishing platform initiated by CogIST, a cognitive science community from Turkey.
         On this platform, articles and essays on different topics from different fields of cognitive science are published in a way that would bridge the gap between public audience and experts."
        openGraph={{
          title: 'thecognizer.com',
          description: 'The Cognizer is a publishing platform initiated by CogIST, a cognitive science community from Turkey.',
          images: [{ url: '/your-image-url.jpg' }],
          url: 'https://www.thecognizer.com',
          site_name: 'thecognizer.com',
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@the_cognizer',
          creator: '@the_cognizer',
        }}
        additionalMetaTags={[
          { name: 'keywords', content: 'cognitive, cognitive scince, cogist, the cognizer' },
          { property: 'article:author', content: 'https://www.twitter.com/the_cognizer' },
          { property: 'og:type', content: 'website' },
          { property: 'og:locale', content: 'en' },
        ]}
        index
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <title>thecognizer.com</title>
        <link rel="stylesheet" href="/styles/globals.scss" />
      </Head>
      <Layout>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZCTSNPNK6W" />
        <Script id="google-analytics">
          { `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-ZCTSNPNK6W');
        `}
        </Script>
        <div className="absolute opacity-20 -top-20" />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
