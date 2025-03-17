import styles from '../styles/ContactPage.module.css';

const AboutPage = () => {
  return (
    <>
      <h1 className={styles.heading}>Conóceme</h1>
      <h3 className={styles.heading}>¡Hola! Soy Alejo Viviani, desarrollador Full Stack con experiencia en Node.js (Express), MySQL, React.js y Tailwind CSS. Me apasiona la tecnología y el desarrollo de software, siempre buscando mejorar mis habilidades y estar al día con las nuevas tendencias.</h3>
      <h3 className={styles.heading}>Me considero una persona autodidacta y proactiva, capaz de trabajar tanto de manera individual como en equipo. Mi objetivo es seguir creciendo en la industria tecnológica y aportar valor a proyectos desafiantes.</h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'AcercaDe' },
  };
}

export default AboutPage;
