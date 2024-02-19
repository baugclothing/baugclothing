'use client'

import { useState } from 'react'
import styles from '@/app/COMPONENTS/COMP. STYLES/header.module.css'
import SearchBar from './SearchBar'

import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/public/logo.png'
import helpIcon from '@/public/icons/help.png'

const Header = () => {
  return (
    <header className={styles.header}>
        <Link href={"/about"}><Image src={helpIcon} className={styles.icon} alt='helpIcon'></Image></Link>
        <Link href={"/"}><Image src={Logo} alt='Baug. Clothing Logo' className={styles.logo}/></Link>
        <Link href={"/about"}><Image src={helpIcon} className={styles.icon} alt='helpIcon'></Image></Link>
    </header>
  )
}

export default Header