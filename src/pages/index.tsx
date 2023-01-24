import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script';
import Layout from '@/components/layout';
import utilStyles from '../styles/utils.module.css'
import { getSortedPlacesData } from '@/lib/places';


export interface IIndexProps {
  allPlacesData: Array<{
    id: string,
    title: string,
    date: string
  }>
}

export default function Index ({allPlacesData}: IIndexProps) {
      return (
        <>
          <Head>
            <title>My places</title>
          </Head>
          <Layout home>
            {/* Keep the existing code here */}

            {/* Add this <section> tag below the existing <section> tag */}
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
              <h2 className={utilStyles.headingLg}>Blog</h2>
              <ul className={utilStyles.list}>
                {allPlacesData.map(({ id, date, title }) => (
                  <li className={utilStyles.listItem} key={id}>
                    <Link href={`places/${id}`}>{title}</Link>
                    <br />
                    <small className={utilStyles.lightText}>{date}</small>
                  </li>
                ))}
              </ul>
            </section>
          </Layout>
        </>
  );
}

export const getStaticProps = async () => {
  const allPlacesData = getSortedPlacesData()

  return {
    props: {
      allPlacesData
    }
  }
}
