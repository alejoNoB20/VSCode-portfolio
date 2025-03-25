import styles from "../styles/About.module.css";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <div>
        <h1 className={styles.heading}>Conóceme</h1>
        <h3 className={styles.subheading}>
          ¡Hola! Soy Alejo Viviani, desarrollador Full Stack con experiencia en
          Node.js (Express), MySQL, React.js y Tailwind CSS. Me apasiona la
          tecnología y el desarrollo de software, siempre buscando mejorar mis
          habilidades y estar al día con las nuevas tendencias.
        </h3>
        <h3 className={styles.subheading}>
          Me considero una persona autodidacta y proactiva, capaz de trabajar
          tanto de manera individual como en equipo. Mi objetivo es seguir
          creciendo en la industria tecnológica y aportar valor a proyectos
          desafiantes.
        </h3>
      </div>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>BackEnd</h2>
          <ul className={styles.list}>
            <Image
              src="/nodejs_icon.svg"
              alt="Logo Node.js"
              height={80}
              width={80}
            />
            <Image
              src="/mysql_icon.svg"
              alt="Logo MySQL"
              height={80}
              width={80}
            />
            <Image
              src="/express_icon.svg"
              alt="Logo Express.js"
              height={80}
              width={80}
            />
          </ul>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>FrontEnd</h2>
          <ul className={styles.list}>
            <Image
              src="/html_icon.svg"
              alt="Logo HTML5"
              height={80}
              width={80}
            />
            <Image src="/css_icon.svg" alt="Logo CSS3" height={60} width={60} />
            <Image
              src="/js_icon.svg"
              alt="Logo JavaScript"
              height={80}
              width={80}
            />
            <Image
              src="/react_icon.svg"
              alt="Logo React.js"
              height={80}
              width={80}
            />
            <Image
              src="/tailwindcss_icon.svg"
              alt="Logo TailwindCSS"
              height={80}
              width={80}
            />
          </ul>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Otros</h2>
          <ul className={styles.list}>
            <Image src="/git_icon.svg" alt="Logo Git" height={60} width={60} />
            <Image
              src="/github_icon.svg"
              alt="Logo GitHub"
              height={80}
              width={80}
            />
            <Image
              src="/cloudinary_icon.svg"
              alt="Logo Cloudinary"
              height={80}
              width={80}
            />
            <Image
              src="/notion_icon.svg"
              alt="Logo Notion"
              height={80}
              width={80}
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "AcercaDe" },
  };
}

export default AboutPage;
