import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}

#root, body, html {
    width:100%;
    height: 100vh;
    margin: 0 auto;
}
  
* {
    ${({ theme }) => theme.fonts.kor};
    box-sizing: border-box;
}
    
`;

export default GlobalStyle;
