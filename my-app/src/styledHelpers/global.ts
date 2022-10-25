import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { stackColor } from './colors';


export const GlobalStyle = createGlobalStyle`
${reset}
html{
    font-size: 16px;
    
}
*{
    color: ${stackColor.black};
}
body{
    background: white;
    overflow: hidden;
    height: 100vh;
    font-family: 'Roboto', 'sans-serif';
}
a,p{
    color: ${stackColor.black};
    font-size:1rem;
}
`