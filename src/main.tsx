import ReactDOM from 'react-dom/client'
import { AppTetris } from './AppTetris'
import bgImage from '../src/Assets/tetris-fondo.jpg'
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body{
    margin:0;
    padding:0;
    background:url(${bgImage}) #000;
    background-size: cover;
    background-position: center;
  }
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <GlobalStyles></GlobalStyles>
    <AppTetris></AppTetris>
  </>,
)
