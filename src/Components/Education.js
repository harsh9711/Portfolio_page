import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {type}</h3>
            < span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
}
const Education = () => {
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
                Education
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                < motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-® w-[4px] h-full
bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"/>
                <ul className="w-full flex flex-col
items-start justify-between ml-4 xs:ml-2">
                    <Details
                        type="Bachelor Of Science In Information Technology"
                        time="2020-2024"
                        place="G.L. Bajaj Institute of technology and management"
                        info="GL Bajaj Institute of Technology and Management is the 6th Institute established under the prestigious banner of Rajeev Memorial Academic Welfare Society (Registered Under Societies Registration Act 1860). The institute is approved by All India Council for Technical Education (AICTE), Ministry of HRD, Govt. of India and Affiliated to Dr. A.P.J. Abdul Kalam Technical University (Formerly UPTU Lucknow)."/>
                    <Details
                        type="Intermediate (XIIth)"
                        time="2019-2020"
                        place="New Delhi Convent Senior Secondary School"
                        info="Enter a realm of boundless possibilities at New Delhi Convent School, where traditional values meet modern innovation to nurture future leaders. Step into a future shaped by knowledge and potential."/>
                    <Details
                        type="HighSchool (Xth)"
                        time="2017-2018"
                        place="Kamal Public School "
                        info="The glorious history of Kamal Public Sr. Sec. School dates back to 1997. Affiliated to CBSE, it enjoys the prerogative of being one of the premier institutions of Delhi. With an array of world class facilities and highly qualified faculty complemented with an enriching curriculum, we elevate the teaching learning experience to unflinching standards."/>
                   


                </ul>
            </div>
        </div>
    )
}
export default Education