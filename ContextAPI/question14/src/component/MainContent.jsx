
const sampleProducts = [
    "Product Alpha",
    "Product Beta",
    "Product Gamma",
    "Product Delta",
    "Product Omega",
    "Product Sigma"
  ]
  
  const MainContent = () => {
    return (
      <div className='p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        {sampleProducts.map((product, index) => (
          <div
            key={index}
            className='p-4 border rounded-lg shadow-md hover:shadow-lg transition'
          >
            <h2 className='text-lg font-semibold'>{product}</h2>
          </div>
        ))}
      </div>
    )
  }
  
  export default MainContent
  