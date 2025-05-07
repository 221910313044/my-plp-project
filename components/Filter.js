import { useState } from 'react';
import styles from '../styles/Products.module.css';

export default function Filter({ categories, onFilter, onPriceChange }) {
  const [selected, setSelected] = useState('All');
  const [price, setPrice] = useState(1000);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelected(value);
    onFilter(value);
  };

  const handlePriceChange = (e) => {
    const value = Number(e.target.value);
    setPrice(value);
    onPriceChange(value);
  };

  return (
    <div className={styles.filter}>
      <label>
        Category:
        <select value={selected} onChange={handleCategoryChange}>
          <option value="All">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </label>

      <label>
        Max Price: ${price}
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          value={price}
          onChange={handlePriceChange}
        />
      </label>
    </div>
  );
}
