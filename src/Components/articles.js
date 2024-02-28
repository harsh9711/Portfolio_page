import React from 'react'
import Layout from '@/Components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import article1 from "../../public/images/articles/pagination component in reacts.jpg"
import AnimatedText from './AnimatedText'
const FeaturedArticle = ({ img, title, time, summary, link }) => {
    return (
        <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl'>
            <Link
                href={link}
                target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link >
            <Link href={link} target="_blank">
                <h2 className='capitalize text-2xl font-bold my-2'>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-pink-500 font-semibol'>{time}</span>
        </li>
    )
}
const articles = () => {
    return (
        <div>
            <Head>
                <title>CodeBucks | Articles Page</title>
                <meta name="description" content="any description" />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
                <Layout className='pt-16'>
                    <AnimatedText text="Words Can Change The World!" className='mb-16' />
                    <ul className='grid grid-cols-2 gap-16'>
                        <FeaturedArticle
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            summary="Learn how to build a custom pagination component in ReactS from scratch.
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                            time="9 min read"
                            link="/"
                            img={article1}
                        />
                        <FeaturedArticle
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            summary="Learn how to build
                        a custom pagination component in ReactS from scratch.
                        Follow this step-by-step guide to integrate Pagination component in your ReactS project."
                            time="9 min read"
                            link="/"
                            img={article1}
                        />
                    </ul>
                </Layout >
            </main>
        </div>
    )
}

export default articles
