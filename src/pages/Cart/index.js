// import React, { useState } from 'react'
// import { FiX } from 'react-icons/fi';
// import * as S from './styles';
// import { Navbar } from '../../components/Navbar';
// import { ProductContext } from '../../hooks/useProductContext'
// import { useContext } from 'react';


// export const Cart = () => {


//   const {
//     productsAdded,
//     removeProductsById,
//     increaseAmount,
//     decreaseAmount,
//     total } = useContext(ProductContext)

//   return (
//     <>
//       <Navbar />
//       <S.CartContainer>
//         <div>
//           {productsAdded.map((item) => (
//             <S.CartFigure>
//               <div>
//                 <img src={`${item.url}`} />
//               </div>
//               <S.CartText>
//                 <p>
//                   {item.name}</p>
//                 <p>Valor: {item.price.toLocaleString('pt-BR',
//                   { style: 'currency', currency: 'BRL' }
//                 )}
//                 </p>
//                 <p>{item.portion}</p>
//                 <S.ContainerQuantitie>
//                   <span>Quantidade:{item.amount}</span>
//                   <button onClick={() => decreaseAmount(item.id)}>-</button>
//                   <button onClick={() => increaseAmount(item.id)}>+</button>
//                 </S.ContainerQuantitie>
//               </S.CartText>
//               <S.ContainerBtn>
//                 {/* <p>Total:</p> */}
//                 <FiX onClick={() => removeProductsById(item.id)} />
//               </S.ContainerBtn>
//             </S.CartFigure>
//           ))}
//         </div>
//         <S.ContainerCheckout>
//           <div>
//             <h1>Pagamento</h1>
//           </div>
//           <div>
//             <p>Método de pagamento</p>
//             <div>
//               <input type="radio" />Crédito
//             </div>
//             <div>
//               <input type="radio" />Débito
//             </div>
//             <div>
//               <p>Nome no cartão</p>
//               <input type="text" placeholder='Digite o nome do cartão' />
//             </div>
//             <div>
//               <p>Número do seu cartão</p>
//               <input type="number" placeholder='0000 0000 0000 0000' />
//             </div>
//             <p>Data de validade</p>
//             <S.ContainerCredit>
//               <input type="number" placeholder='00' />
//               <input type="number" placeholder='2023' />
//               <input type="number" placeholder='CVV' />
//             </S.ContainerCredit>
//           </div>
//           <S.Total>
//             <span>Total: {total.toLocaleString('pt-BR',
//               { style: 'currency', currency: 'BRL' }
//             )}</span>
//           </S.Total>
//           <S.BtnAdded>
//             Comprar
//           </S.BtnAdded>
//         </S.ContainerCheckout>
//       </S.CartContainer>
//     </>

//   );
// };




