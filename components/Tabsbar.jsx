import Tab from "./Tab";
import styles from "../styles/Tabsbar.module.css";

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="index.jsx" path="/" />
      <Tab icon="/html_icon.svg" filename="sobreMi.html" path="/about" />
      <Tab icon="/css_icon.svg" filename="contactos.css" path="/contact" />
      <Tab icon="/js_icon.svg" filename="projectos.js" path="/projects" />
      <Tab icon="/markdown_icon.svg" filename="github.md" path="/github" />
    </div>
  );
};

export default Tabsbar;
