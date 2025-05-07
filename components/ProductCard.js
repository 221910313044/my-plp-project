import styles from '../styles/Products.module.css';

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <h3 className={styles.name}>{product.title}</h3>
      <p className={styles.price}>${product.price.toFixed(2)}</p>
    </div>
  );
}
