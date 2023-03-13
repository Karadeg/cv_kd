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
      <div className={styles.main}>
        <Header photoRefContainer={photoRefContainer}/>
      </div>
      <div ref={photoRefContainer} className={styles.photosContainer}>
        <div className={styles.centerContainer}>
          <h1>Photographies</h1>
        </div>
        <section>
          <div className={styles.highway_slider}>
            <div class={styles.highway_barrier}>
              <div class={styles.highway_lane}>
                <div className={styles.highway_car}>
                  <Image className={styles.image} src="/paris.JPG" width={300} height={450} ></Image>
                </div>
                <div className={styles.highway_car}>
                  <Image className={styles.image} src="/paris.JPG" width={300} height={450} ></Image>
                </div>
                <div className={styles.highway_car}>
                  <Image className={styles.image} src="/paris.JPG" width={300} height={450} ></Image>
                </div>
                <div className={styles.highway_car}>
                  <Image className={styles.image} src="/paris.JPG" width={300} height={450} ></Image>
                </div>
                <div className={styles.highway_car}>
                  <Image className={styles.image} src="/paris.JPG" width={300} height={450} ></Image>
                </div>

                <div className={styles.highway_car}>
                  <Image className={styles.image} src="/paris.JPG" width={300} height={450} ></Image>
                </div>
                <div className={styles.highway_car}>
                  <Image className={styles.image} src="/paris.JPG" width={300} height={450} ></Image>
                </div>
                <div className={styles.highway_car}>
                  <Image className={styles.image} src="/paris.JPG" width={300} height={450} ></Image>
                </div>
                <div className={styles.highway_car}>
                  <Image className={styles.image} src="/paris.JPG" width={300} height={450} ></Image>
                </div>
                <div className={styles.highway_car}>
                  <Image className={styles.image} src="/paris.JPG" width={300} height={450} ></Image>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id='photosContainer' >

      </div>
    </>
  )
}