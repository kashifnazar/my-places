import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script';
import Layout from '@/components/layout';


export interface IIndexProps {
}

export default function Index (props: IIndexProps) {
  return (
    <Layout>
      <Head>
        <title>My Places</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`, window.FB)
        }
      />
      <h1>
          Home page
      </h1>
      <div className="title">
        Here is the list of the cities I have been to:
          <ul>
            <li><Link href="/places/london">London</Link></li>
            <li><Link href="/places/islamabad">Islamabad</Link></li>
            <li><Link href="/places/dubai">Dubai</Link></li>
          </ul>
      </div>
    </Layout>
  );
}
