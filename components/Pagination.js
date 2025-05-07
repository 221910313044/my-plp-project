import styles from '../styles/Products.module.css';

export default function Pagination({ totalProducts, productsPerPage, currentPage, paginate }) {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.pagination}>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          style={{
            margin: '0 5px',
            padding: '0.5rem 1rem',
            backgroundColor: number === currentPage ? '#0070f3' : '#e0e0e0',
            color: number === currentPage ? '#fff' : '#000',
            borderRadius: '5px',
          }}
        >
          {number}
        </button>
      ))}
    </div>
  );
}
