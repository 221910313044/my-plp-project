import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.paymentMethods}>
          <h3>Payment Methods</h3>
          <div className={styles.paymentIcons}>
            <img src="/images/payment-methods/visa.png" alt="Visa" className={styles.paymentIcon} />
            <img src="/images/payment-methods/mastercard.png" alt="MasterCard" className={styles.paymentIcon} />
            <img src="/images/payment-methods/paypal.png" alt="PayPal" className={styles.paymentIcon} />
            <img src="/images/payment-methods/stripe.png" alt="Stripe" className={styles.paymentIcon} />
            <img src="/images/payment-methods/apple-pay.png" alt="Apple Pay" className={styles.paymentIcon} />
          </div>
        </div>
        <div className={styles.contact}>
          <h3>Contact Us</h3>
          <p>Email: support@mystore.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className={styles.socials}>
          <h3>Follow Us</h3>
          <ul className={styles.socialList}>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
          </ul>
        </div>
      </div>
      <p className={styles.copyRight}>© 2025 MyStore. All Rights Reserved.</p>
    </footer>
  );
}
