import Layout from '@/components/layout';
import * as React from 'react';
import { getFileNames, getPlaceData } from '@/lib/places';
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'


export interface IPlaceProps {
    placeData: {
        id: string,
        title: string,
        date: string
        contentHtml: string
    }
}

export default function Place ({placeData: {id, title, date, contentHtml}}: IPlaceProps) {
  return (
    <Layout>
        <Head>
            <title>{title}</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{title}</h1>
            <div className={utilStyles.lightText}>{date}</div>
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} className="content"></div>
        </article>
    </Layout>
  );
}

const getAllPlaceIds = () => {
    const fileNames = getFileNames()

    return fileNames.map((fileName) => {
        return {
          params: {
            id: fileName.replace(/\.md$/, ''),
          },
        };
    });
}

export const getStaticPaths = () => {
    return {
        paths: getAllPlaceIds(),
        fallback: false
    }
}

export const getStaticProps = async ({params}: {params: {id: string}}) => {

    const placeData = await getPlaceData(params.id)

    return {
        props: {
            placeData
        }
    }



}