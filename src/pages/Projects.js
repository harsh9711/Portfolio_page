import AnimatedText from '../Components/AnimatedText';
import Layout from '../Components/Layout';
import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import project3 from "/public/images/articles/3.jpg";
import project4 from "/public/images/articles/4.jpg";

import project2 from "/public/images/articles/2.jpg";
import project1 from "/public/images/articles/1.jpg";
import { GithubIcon } from '@/Components/Icon'; // Make sure this path is correct
import { motion } from 'framer-motion';
import TransitionEffect from '@/Components/TransitionEffect';
const FramerImage = motion(Image);
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between  relative rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 z-[-1] w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light  rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw,(max-width:1200px) 50vw,50vw" />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-pink-700 font-medium text-xl dark:text-primaryDark x:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'><GithubIcon /></Link>
                    <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base'>Visit Project</Link>
                </div>
            </div>
        </article>
    );
};
const Project = ({ title, type, img, link, github }) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-pink-700 font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={github} target="_blank" className='w-8'><GithubIcon /> {" "}</Link>
                    <Link href={link} target="_blank" className='text-lg font-semibold underline md:text-base'>Visit</Link>
                </div>
            </div>
        </article>
    )
}


const Projects = () => {
    return (
        <>
            <Head>
                <title>CodeBucks | Projects Page</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect/>
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Imagination Trumps Knowledge!"
                    className="mb-16 1g: !text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"/>
                     <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12 sm:col-span-12'>
                            <FeaturedProject
                                title="YOUTUBE"
                                img={project4}
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                                link="" // Corrected prop name
                                github="" // Adjusted GitHub link if needed
                                type=""
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            {/* Project2 */}
                            <Project
                                title="OCHI"
                                img={project1}
                                // summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                                link="https://ochi-by-vite.vercel.app/"
                                github="https://github.com/harsh9711/OCHI-BY-VITE-"
                                type="Lenskart Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            {/* Project2 */}
                            <Project
                                title="Crypto Screener Application"
                                img={project4}
                                // summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                                link="https://youthoob-d.vercel.app/"
                                github=""
                                type="Youtube Clone Project"
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title="TRIPPY"
                                img={project2}
                                // summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                                link="https://responsive-trip.vercel.app/"
                                github="https://github.com/harsh9711/responsive-trip"
                                type="Travel Website Project"
                            />
                            {/* Featured Project */}
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title="MI WEBSITE"
                                img={project3}
                                // summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                                link="https://mi-clone-app.netlify.app/"
                                github="https://github.com/harsh9711/miclone2"
                                type="Clone Project"
                            />
                            {/* Featured Project */}
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default Projects;
