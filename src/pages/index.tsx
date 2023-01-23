import * as React from 'react';
import Link from 'next/link';


export interface IIndexProps {
}

export default function Index (props: IIndexProps) {
  return (
    <div>
      <h1>
          Index page
      </h1>
      <h1 className="title">
        Here is the list of the cities I have been to:
          <ul>
            <li><a href="/places/london">London</a></li>
            <li><Link href="/places/islamabad">Islamabad</Link></li>
            <li><Link href="/places/dubai">Dubai</Link></li>
          </ul>
      </h1>
    </div>
  );
}
