import { createGlobalStyle } from 'styled-components'
import { ProductProvider } from '../hooks/useProductContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Home';
import { Cart } from './Cart';

const GlobalStyle = createGlobalStyle`
    *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Star Wars", sans-serif; 
  }
`

function App() {
  return (
    <ProductProvider>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
