import ProductCard from './ProductCard';
import styles from '../styles/Products.module.css';

export default function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return <p style={{ textAlign: 'center' }}>No products found.</p>;
  }

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
