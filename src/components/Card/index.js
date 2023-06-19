// import React, { useContext } from 'react'
// import { ProductContext } from '../../hooks/useProductContext'
// import { FiShoppingCart } from 'react-icons/fi'
// import * as S from './styles'

// export const Card = () => {

//   const { products, addProductsCart } = useContext(ProductContext)


//   return (
//     <S.CardFigure>
//       {products.map((item, index) => (
//         <>
//           <div key={index}>
//             <img src={`${item.url}`} />
//           </div>
//           <span>
//             <h3>{item.name}</h3>
//             <p>Valor:
//               {item.price.toLocaleString('pt-BR',
//                 { style: 'currency', currency: 'BRL' }
//               )}
//             </p>
//             <p>{item.portion}</p>
//           </span>
//           <button
//             onClick={() => addProductsCart(item)}>
//             <FiShoppingCart />
//             adicionar
//           </button>
//         </>
//       ))}
//     </S.CardFigure>

//   )
// }