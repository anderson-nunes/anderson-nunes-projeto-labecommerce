import { createGlobalStyle } from 'styled-components'
import { Home } from './Home';

const GlobalStyle = createGlobalStyle`
    *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;  
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
