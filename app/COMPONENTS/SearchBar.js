'use client'

import styles from '@/app/COMPONENTS/COMP. STYLES/searchbar.module.css'

import { useState } from 'react'

import Image from 'next/image'
import searchIcon from '@/public/icons/search.png'

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  function handleChange(event){
    setSearchTerm(event.target.value)
  }

  function handleSearch(){
    /* Tem que ter uma forma de passar a variavel search term pro showcase.js!! */
  }

  return (
    <div className={styles.searchContainer}>
        <div className={styles.searchBar}>
            <input 
                type='text'
                placeholder='Buscar'
                className={styles.input}
                onChange={handleChange}
            />
        </div>
        <div className={styles.buttonContainer}>
            <button className={styles.button} type="button" onClick={handleSearch}><Image className={styles.searchIcon} src={searchIcon} alt='Search Icon'></Image></button>
        </div>
    </div>
  )
}

export default SearchBar