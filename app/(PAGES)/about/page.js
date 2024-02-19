import React from 'react'
import styles from '../../STYLES/about.module.css'

import Image from 'next/image'
import Link from 'next/link'

import quemsomosImg from '../../../public/about/quemsomos.png'
import contatoImg from '../../../public/about/contato.png'

const About = () => {
  return (
    <main className={styles.main}>
      <div className={styles.aboutContainer}>
        
        {/* QUEM SOMOS? */}
        <div className={styles.imageContainer}>
          <Image 
            src={quemsomosImg}
            className={styles.img}
            alt='Quem somos?'
          />
        </div>

        <div className={styles.textContainer}>
          <p className={styles.p}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; baug. clothing é uma marca de roupas e acessórios do interior de São Paulo. 
            Trabalhando com artes autorais e de amigos, nosso objetivo é trazer roupa bonita de forma acessível e fomentar a expressão artística em todas as suas formas. 
            Atualmente, estamos no período de pré-venda de alguns modelos, que vai até maio de 2024.</p>
        </div>

        {/* BREAK */}
        <div className={styles.break}></div>

        {/* CONTATO */}
        <div className={styles.imageContainer}>
          <Image 
            src={contatoImg}
            className={styles.img}
            alt='Contato'
          />
        </div>

        <div className={styles.textContainer}>
          <p className={styles.p}>
            E-mail: <Link href={'mailto:contato.baugclothing@gmail.com'}>contato.baugclothing@gmail.com</Link> <br />
            Telefone (Whatsapp): <Link href={'tel:+5519987191948'}>19 98719-1948</Link> <br />
            Instagram: <Link href={'https://instagram.com/baugclothing'} target='_blank'>@baugclothing </Link> <br />
            Twitter: <Link href={'https://twitter.com/baugclothing'} target='_blank'>@baugclothing </Link> <br />
            Atendo por Breno Baug. (ele/dele).
          </p>
        </div>
        

      </div>
    </main>
  )
}

export default About