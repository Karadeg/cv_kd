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
          <Link href="#projetsContainer">Projets</Link>
          <Link href="#contactContainer">Contact</Link>
        </div>
      </div>
    )
}