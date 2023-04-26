import styles from './header.module.css'
import Image from 'next/image'

export default function Header({photoRefContainer}) {

    const handleClick = () => {
      photoRefContainer.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.headerContainer}>
          <div className={styles.headerDescription}>
            <p className={styles.paragraphDark}>Hey !</p>
            <p className={styles.mainTitle}>Je m'appelle<span className={styles.highlightWord}>Karadeg</span></p>
            <p className={styles.paragraphDark}>Étudiant à l'ESEO et futur ingénieur logiciel spécialisé dans le front. Actuellement en dernière année, je suis en alternance chez Thales et me prépare à ma sortie d'école. Je suis ouvert à toutes propositions, n'hésitez pas à me contacter</p>
          </div>
          <svg viewBox="0 0 400 400" className={styles.circle}>
              <circle cx = "200" cy = "200" r = "100" fill = "#FFD465"/>
            </svg>
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