import styles from './listPhotos.module.css'
import React, { useEffect, useRef } from 'react';

export default function ListPhotos({photoRef}) {

    const photoRef = useRef(null);

    useEffect(() => {
        console.log(photoRef)
    }, [])

    return (
        <div ref={photoRef} id='photosContainer' className={styles.photosContainer}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src="/paris.JPG"
              fill="true"
            ></Image>
          </div>
        </div>
    )
}