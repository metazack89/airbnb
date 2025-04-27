import styles from "./styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer>
        <p className="footer-text">@ 2025 Airbnb Cristian Ortiz</p>
        <a
          href="https://github.com/metazack89"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#007bff", textDecoration: "none" }}
        >
          <FontAwesomeIcon icon={faGithub} className={styles.gitHubIcon} />
        </a>
      </footer>
    </>
  );
}
