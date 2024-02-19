import styles from '@/app/COMPONENTS/COMP. STYLES/footer.module.css'

import Link from 'next/link'
import Image from 'next/image'

import twitterIcon from '@/public/icons/twitter.png'
import instagramIcon from '@/public/icons/instagram.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p className={styles.p}>Siga a Baug...</p> 

        <Link 
          target='_blank' 
          href={"https://instagram.com/baugclothing"}>
            <Image 
              src={instagramIcon} 
              alt='Instagram Icon' 
              className={styles.icon}>
            </Image>
        </Link>

        <Link 
          target='_blank' 
          href={"https://twitter.com/baugclothing"}>
            <Image 
              src={twitterIcon} 
              alt='Twitter Icon' 
              className={styles.icon}>
            </Image>
        </Link>

        <p className={styles.p}>...Clothing nas redes!</p>
    </footer>
  )
}

export default Footer