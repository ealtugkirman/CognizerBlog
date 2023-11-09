import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import wave from '../public/assets/wave.svg';
import '../styles/globals.scss';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <NextSeo
        title="hukukteknolojisi.com"
        name="robots"
        content="index,follow"
        description="hukukteknolojisi.com, dünya genelinde teknolojiyi etkileyen hukuki gelişmeler ile hukuku etkileyen teknolojik gelişmeleri inceler ve aktarır."
        openGraph={{
          title: 'hukukteknolojisi.com',
          description: 'hukukteknolojisi.com, dünya genelinde teknolojiyi etkileyen hukuki gelişmeler ile hukuku etkileyen teknolojik gelişmeleri inceler ve aktarır.',
          images: [{ url: '/your-image-url.jpg' }],
          url: 'https://www.hukukteknolojisi.com',
          site_name: 'hukukteknolojisi.com',
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@your_twitter_username',
          creator: '@your_twitter_username',
        }}
        additionalMetaTags={[
          { name: 'keywords', content: 'hukuk teknolojisi, hukuk start-up, start-up hukuku, hukuk alanında girşimler' },
          { property: 'article:author', content: 'https://www.twitter.com/your_twitter_username' },
          { property: 'article:publisher', content: 'https://www.linkedin.com/company/your-linkedin-company-page' },
          { property: 'og:type', content: 'website' },
          { property: 'og:locale', content: 'en_tr' },
        ]}
        index
      /> */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <title>hukukteknolojisi.com</title>
      </Head>
      <Layout>
        <div className="absolute opacity-20 -top-20">
          <Image
            src={wave}
            alt="hukukteknolojisi.com arka planıs"
          />
        </div>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
