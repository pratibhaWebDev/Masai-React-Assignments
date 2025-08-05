import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setDisplayed(data.products);

        const allCats = ['all', ...new Set(data.products.map(p => p.category))];
        setCategories(allCats);
      });
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (sortOrder === 'low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setDisplayed(filtered);
  }, [selectedCategory, sortOrder, products]);

  return (
    <div>
      <h1>All Products</h1>
      <Filters 
        categories={categories} 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {displayed.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
