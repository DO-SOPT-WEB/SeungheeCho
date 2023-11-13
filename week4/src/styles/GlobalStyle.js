import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}

#root, body, html {
    width:100%;
    height: 100vh;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
}

* {
    box-sizing: border-box;
}
    
`;

export default GlobalStyle;
