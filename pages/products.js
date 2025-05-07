import { useState, useEffect } from 'react';
import ProductGrid from '../components/ProductGrid';
import Filter from '../components/Filter';
import Pagination from '../components/Pagination';
import styles from '../styles/Products.module.css';

export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  const categories = [...new Set(products.map((p) => p.category))];

  return {
    props: {
      products,
      categories,
    },
  };
}

export default function ProductsPage({ products, categories }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(1000);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  useEffect(() => {
    let temp = products;
    if (selectedCategory !== 'All') {
      temp = temp.filter((p) => p.category === selectedCategory);
    }
    temp = temp.filter((p) => p.price <= maxPrice);
    setFilteredProducts(temp);
    setCurrentPage(1);
  }, [selectedCategory, maxPrice]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Products</h1>
      <Filter
        categories={categories}
        onFilter={setSelectedCategory}
        onPriceChange={setMaxPrice}
      />
      <ProductGrid products={currentProducts} />
      <Pagination
        totalProducts={filteredProducts.length}
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        paginate={setCurrentPage}
      />
    </div>
  );
}
