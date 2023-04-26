import React, {useRef} from 'react';
import NavBar from './../NavBar/NavBar'
import Header from './../Header/Header'
import styles from './homepage.module.css'
import Image from 'next/image'

export default function Homepage() {

  const photoRefContainer = useRef(null);

  return (
    <>
      <div className={styles.headerContainer}>
        <NavBar/>
        <div className={styles.main}>
          <Header photoRefContainer={photoRefContainer}/>
        </div>
      </div>
      <div ref={photoRefContainer} className={styles.photosContainer}>
        <div className={styles.centerContainer}>
          <h1 className='subtitle'>Photographies</h1>
        </div>
        <section className={styles.photos_highway}>
          <div className={styles.highway_slider}>
            <div class={styles.highway_barrier}>
              <div class={styles.highway_lane}>
                <div className={styles.highway_car}>
                  <Image className={styles.image} src="/paris.JPG" width={350} height={525} ></Image>
                  <div className={styles.photo_title}>
                    <p>Paris</p>
                  </div>
                </div>
                <div className={styles.highway_car}>
                  <Image className={styles.image} src="/angers.jpg" width={350} height={525} ></Image>
                  <div className={styles.photo_title}>
                    <p>Angers</p>
                  </div>
                </div>
                <div className={styles.highway_car}>
                  <Image className={styles.image} src="/night.jpg" width={350} height={525} ></Image>
                  <div className={styles.photo_title}>
                    <p>Nuit</p>
                  </div>
                </div>
                <div className={styles.highway_car}>
                  <Image className={styles.image} src="/marche.jpg" width={350} height={525} ></Image>
                  <div className={styles.photo_title}>
                    <p>Marché</p>
                  </div>
                </div>
                <div className={styles.highway_car}>
                  <Image className={styles.image} src="/ff.jpg" width={350} height={525} ></Image>
                  <div className={styles.photo_title}>
                    <p>Forrain</p>
                  </div>
                </div>

                <div className={styles.highway_car}>
                  <Image className={styles.image} src="/paris.JPG" width={350} height={525} ></Image>
                  <div className={styles.photo_title}>
                    <p>Paris</p>
                  </div>
                </div>
                <div className={styles.highway_car}>
                  <Image className={styles.image} src="/angers.jpg" width={350} height={525} ></Image>
                  <div className={styles.photo_title}>
                    <p>Angers</p>
                  </div>
                </div>
                <div className={styles.highway_car}>
                  <Image className={styles.image} src="/night.jpg" width={350} height={525} ></Image>
                  <div className={styles.photo_title}>
                    <p>Nuit</p>
                  </div>
                </div>
                <div className={styles.highway_car}>
                  <Image className={styles.image} src="/marche.jpg" width={350} height={525} ></Image>
                  <div className={styles.photo_title}>
                    <p>Marché</p>
                  </div>
                </div>
                <div className={styles.highway_car}>
                  <Image className={styles.image} src="/ff.jpg" width={350} height={525} ></Image>
                  <div className={styles.photo_title}>
                    <p>Forrain</p>
                  </div>
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