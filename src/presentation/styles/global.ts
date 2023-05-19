import { createGlobalStyle } from 'styled-components'
import ubuntuWoff from '@/presentation/assets/fonts/ubuntu/ubuntu.woff'
import ubuntuWoff2 from '@/presentation/assets/fonts/ubuntu/ubuntu.woff2'
export const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'Ubuntu';
      src: url(${ubuntuWoff2}) format('woff2'), url(${ubuntuWoff}) format('woff2');
      font-weight: 400;
      font-display: swap;
      font-style: normal;
    }

    html {  
      font-family: 'Ubuntu', sans-serif;
      box-sizing: border-box;
      font-size: 16px;
      background: #fffdf4;
    }
        
    *, *:before, *:after {
      box-sizing: inherit;
    }
        
    body,h1,h2,h3,h4,h5,h6,p,ol,ul {
      margin: 0;
      padding: 0;
      font-weight: normal;
    }
        
    ol,ul {
      list-style: none;
    }
        
    img {
      max-width: 100%;
      height: auto;
    }
`
