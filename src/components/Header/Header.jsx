import styles from './header.module.css'
import Image from 'next/image'

export default function Header({photoRefContainer}) {

    const handleClick = () => {
      photoRefContainer.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.headerContainer}>
          <div className={styles.headerDescription}>
            <p>
              Hey ! Je suis <span className={styles.highlightWord}>Karadeg Daucé</span>, développeur FullStack et passionné de <span className={styles.highlightWord}>design</span> et de <span className={styles.highlightWord}>photos</span>.
            </p>
            <svg viewBox="0 0 400 400" className={styles.circle}>
              <circle cx = "200" cy = "200" r = "150" fill = "#0a5ed4"/>
            </svg>
          </div>
          <div className={styles.ctaContainer}>
            <a className={styles.cta} onClick={handleClick}>
              <Image
                className={styles.icons}
                src="/arrow_down.png"
                width={40}
                height={40}
              ></Image>
            </a>
          </div>
        </div>
    )
}