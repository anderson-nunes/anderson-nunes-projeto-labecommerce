// import { createContext, useEffect, useState } from "react";

// import { db } from '../db/db'

// export const ProductContext = createContext()

// export const ProductProvider = ({ children }) => {

//   const [products, setProducts] = useState([])


//   const initialProductsAdded = localStorage.getItem('productsAdded')

//   const [productsAdded, setProductsAdded] = useState(JSON.parse(initialProductsAdded) || [])

//   const addProductsCart = (product) => {

//     const newProdutcsAdded = productsAdded.concat({ ...product, amount: 1 })

//     setProductsAdded(newProdutcsAdded)
//   }

//   const [name, setName] = useState('')

//   useEffect(() => {
//     setProducts(db)
//   }, [])


//   return (
//     <ProductContext.Provider
//       value={{ products, setProducts, name, setName, addProductsCart }}
//     >
//       {children}

//     </ProductContext.Provider>
//   )
// }