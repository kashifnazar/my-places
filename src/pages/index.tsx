import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image'


export interface IIndexProps {
}

export default function Index (props: IIndexProps) {
  return (
    <div>
      <h1>
          Index page
      </h1>
      <Image src="/images/profile.jpg" alt='Profile' width={144} height={144} />
      <p className="title">
        Here is the list of the cities I have been to:
          <ul>
            <li><a href="/places/london">London</a></li>
            <li><Link href="/places/islamabad">Islamabad</Link></li>
            <li><Link href="/places/dubai">Dubai</Link></li>
          </ul>
      </p>
    </div>
  );
}
