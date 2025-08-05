const Filters = ({ categories, selectedCategory, setSelectedCategory, sortOrder, setSortOrder }) => {
    return (
      <div style={{ marginBottom: '20px' }}>
        <label>
          Category: 
          <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </label>
  
        <label style={{ marginLeft: '20px' }}>
          Sort By Price: 
          <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
            <option value="">None</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </label>
      </div>
    );
  };
  
  export default Filters;
  