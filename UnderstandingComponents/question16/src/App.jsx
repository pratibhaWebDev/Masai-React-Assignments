import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './component/ProductCard'

function App() {
  
  const [products,setProducts]=useState([])

  const[form,setForm]=useState({
    name:'',
    price:'',
    image:'',
    discount:'',
  })

  const [errors,setErrors]=useState({})

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  const validate=()=>{
    const errors={}

    if(!form.name.trim()){
      errors.name='Name is required'
    }

    if(!form.price || isNaN(form.price) || Number(form.price)<=0){
      errors.price='Price is required and should be a positive number'
    }

    if(!form.image || !form.image.startsWith('http')){
      errors.image='Image should be a valid url'
    }

    if (form.discount) {
      const discountValue = Number(form.discount)
      if (
        isNaN(discountValue) ||
        discountValue < 0 ||
        discountValue > 100
      ) {
        errors.discount = 'Discount must be between 0 and 100'
      }


      setErrors(errors)
    return Object.keys(errors).length === 0
  }
}

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    const newProduct = {
      name: form.name,
      price: Number(form.price),
      image: form.image,
      discount: form.discount ? Number(form.discount) : undefined,
    }

    setProducts([...products, newProduct])
    setForm({ name: '', price: '', image: '', discount: '' })
    setErrors({})
  }


  return (
    <>
       <div className="app">
      <h1>Product Entry</h1>

      <form onSubmit={handleSubmit} className="product-form">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
          />
          {errors.price && <p className="error">{errors.price}</p>}
        </div>

        <div>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
          />
          {errors.image && <p className="error">{errors.image}</p>}
        </div>

        <div>
          <input
            type="text"
            name="discount"
            placeholder="Discount (%) - optional"
            value={form.discount}
            onChange={handleChange}
          />
          {errors.discount && <p className="error">{errors.discount}</p>}
        </div>

        <button type="submit">Add Product</button>
      </form>

      <div className="product-list">
        {products.map((p, index) => (
          <ProductCard key={index} {...p} />
        ))}
      </div>
    </div>
    </>
  )
}

export default App
