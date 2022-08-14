import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
}

html, body, #root{
    min-height: 100%
}

body{
    font-size: 14px;
    -webkit-font-smoothing: antialiased !important;
    color:#ECB365;
}

body, input, button{
    color: #ffffff;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
}

button{
    cursor: pointer;
}

a{
    text-decoration: none;
 color: white;
}

.titulo{
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
    color: #ECB365;
    margin-bottom: 20px;
    border-bottom: 2px dashed white;
}

.imagens{
    width: 100%;
    height: auto;
}

`;
