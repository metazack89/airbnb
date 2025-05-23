import heroBanner from "/hero_section.gif";
import styles from "./styles/Hero.module.css";

export default function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <img
            src={heroBanner}
            alt="holiday_property"
            className={styles.heroImg}
            width="400px"
          />
          <div className={styles.bannerText}>
            <h2> Find Your Perfect Escape</h2>
          </div>
        </div>
      </section>
    </>
  );
}
