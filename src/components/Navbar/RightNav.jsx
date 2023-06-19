// import { FiShoppingCart } from 'react-icons/fi';
// import * as S from './styles';
// import { Link } from 'react-router-dom';
// import { Badge } from '../Badge'
// import { useProductContext } from '../../hooks/useProductContext';


// export const RightNav = ({ open, name, setName }) => {

//   const { productsAdded } = useProductContext();


//   return (
//     <>
//       <S.Ul open={open}>
//         <li>Brinquedos</li>
//         <li>Lançamentos</li>
//         <li>Promoções</li>
//         <li>Contato</li>
//       </S.Ul>
//       <S.Search>
//         <p>Busca</p>
//         <input
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           type="text"
//           placeholder='Star Wors Brinquedos' />
//         <Link to="/cart">
//           {!!productsAdded.length && <Badge>{productsAdded.length}</Badge>}
//           <FiShoppingCart />
//         </Link>
//       </S.Search>
//     </>
//   )
// }

