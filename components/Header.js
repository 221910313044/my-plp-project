import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">MyStore</Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/products">Products</Link>
        <Link href="/sign-in">Sign In</Link>
        <Link href="/sign-up">Sign Up</Link>
      </nav>
    </header>
  );
}
