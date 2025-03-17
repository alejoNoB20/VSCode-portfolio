import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>Mi</h1>
          <h1>Portfolio</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Alejo Joel Viviani</h1>
            <h6 className={styles.bio}>Desarrollador Web Full Stack</h6>
            <Link href="/projects">
              <button className={styles.button}>Ver Proyectos</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contáctame!</button>
            </Link>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Index' },
  };
}
