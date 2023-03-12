import Image from 'next/image'
import Link from 'next/link'
import styles from './navBar.module.css'

export default function NavBar () {
    return(
        <div className={styles.navBarContainer}>
        <Image
          src="next.svg"
          width={70}
          height={70}
        >
        </Image>
        <div className={styles.menuIconsContainer}>
          <Link href="#designsContainer">DESIGN</Link>
          <Link href="#photosContainer">PHOTOS</Link>
          <Link href="#photosContainer">CONTACT</Link>
        </div>
      </div>
    )
}