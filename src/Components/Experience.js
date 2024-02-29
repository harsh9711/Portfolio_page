import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-1g'>{position}&nbsp;<a href={companyLink}
                target="_blank"
                className='text-pink-200 dark:text-primaryDark capitalize'>@{company}</a></h3>
            < span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}
const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Experience
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full '>
                < motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-® w-[4px] h-full
bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"/>
                <ul className="w-full flex flex-col
items-start justify-between ml-4 xs:ml-2">
                    <Details
                        position="Software Engineer"
                        company="QBACK"
                        companyLink="https://www.qback.ai/"
                        time="2023" address="Banglore"
                        work="Developed 20 web pages using Next.js, Material UI, TypeScript,
Tailwind, MongoDB.
● Executed website development from raw and overall backend tasks.."
                    />
                    <Details
                        position="Frontend Developer" company="Outvision Technologies Private Ltd"
                        companyLink=""
                        time="2022-2023" address="Delhi"
                        work="Engineered responsive web pages using React, Material UI, and CSS,
resulting in a 40% increase in user engagement metrics and a 25%
boost in conversion rates within the e-commerce sector.
● Mainly work in website maintenance and overall works."
                    />
                    <Details
                        position="Web Development and Designing Intern" company="The Sparks Foundation"
                        companyLink="https://www.thesparksfoundationsingapore.org/"
                        time="2022" address="Banglore"
                        work="Sparks Foundation Web Development and Designing Intern  Crafted 10 Web Pages in React and CSS. Provided 2 components of the login and signup page.Tech Stack Used: React.js , CSS , Bootstrap , Material UI "
                    />
                    <Details
                        position="Software Engineer" company="NVIDIA"
                        companyLink="https://www.nvidia.com/en-in/about-nvidia/#slide-14-095fee10"
                        time="2021-2022" address="Delhi"
                        work="NVIDIA pioneered accelerated computing to tackle challenges no one else can solve. Our work in AI and digital twins is transforming the world's largest industries and profoundly impacting society."
                    />

                </ul>
            </div>
        </div>
    )
}
export default Experience