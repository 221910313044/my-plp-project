import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CartProvider } from '../context/CartContext';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Header />
      <Component {...pageProps} />
      <Footer /> {/* Footer will be shown on every page */}
    </CartProvider>
  );
}

export default MyApp;
