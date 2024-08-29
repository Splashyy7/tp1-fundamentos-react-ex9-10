import React, { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar produtos');
        }
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Preço: ${product.price}</p>
            <img src={product.image} alt={product.title} width={100} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
