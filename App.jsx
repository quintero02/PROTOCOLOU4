import { useEffect, useState } from 'react';
import { getAll } from './services/productService';

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll().then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  );
}
