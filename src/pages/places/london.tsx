import * as React from 'react';
import Head from 'next/head';

interface ILondonProps {
}

const London: React.FunctionComponent<ILondonProps> = (props) => {
  return ( 
  <>
    <Head>
      <title>London</title>
    </Head>
    <h1>
      London
    </h1>
  </>
  );
};

export default London;
