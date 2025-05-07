// pages/index.js
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Welcome to My Store</h1>
        <p className={styles.subtitle}>Discover the best products at amazing prices!</p>
        <Link href="/products" className={styles.button}>
          Shop Now
        </Link>
      </section>
    </div>
  );
}
