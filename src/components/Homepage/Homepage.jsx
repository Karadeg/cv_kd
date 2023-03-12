import React, {useState, useEffect, useRef} from 'react';
import NavBar from './../NavBar/NavBar'
import Header from './../Header/Header'
import styles from './homepage.module.css'
import Image from 'next/image'

export default function Homepage() {

  const photoRefContainer = useRef(null);

  return (
    <>
      <NavBar/>
      <main className={styles.main}>
        <Header photoRefContainer={photoRefContainer}/>
        <div ref={photoRefContainer} className={styles.photosContainer}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src="/paris.JPG"
              fill="true"
            ></Image>
          </div>
        </div>
        <div id='photosContainer' >

        </div>
      </main>
    </>
  )
}