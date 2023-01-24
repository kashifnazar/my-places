import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script';


export interface IIndexProps {
}

export default function Index (props: IIndexProps) {
  return (
    <>
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
          Index page
      </h1>
      <Image src="/images/profile.jpg" alt='Profile' width={144} height={144} />
      <div className="title">
        Here is the list of the cities I have been to:
          <ul>
            <li><Link href="/places/london">London</Link></li>
            <li><Link href="/places/islamabad">Islamabad</Link></li>
            <li><Link href="/places/dubai">Dubai</Link></li>
          </ul>
      </div>
    </>
  );
}
