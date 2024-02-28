import React from 'react'
import Link from 'next/link'
import Layout from './Layout'
const Footer = () => {
  return (
<footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
<Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
<span>{new Date().getFullYear()} &copy; All Rights Reserved. </span>
<div className='flex items-center lg:py-2'>
Build With <span className='dark:text-secondary text-2xl px-1 text-pink-400 dark:text-primaryDark'>&#9825;</span>
by&nbsp;<Link href="https://devdreaming.com" className= 'underline underline-offset-2' target={"_blank"}>CodeBucks</Link>
</div>
<Link href="https://devdreaming.com" target={"_blank"}>Say hello</Link>
</Layout>
</footer>
  )
}

export default Footer
