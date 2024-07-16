import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    font-family: ${(props) => props.theme.FONT_FAMILY};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    scroll-behavior: smooth;
}

body{
    background-color: ${props => props.theme.COLORS.GRAY_900};

    overflow: hidden;
}

button{
    border: none;
    cursor: pointer;

    outline: none;
}

input{
    border: none;
    outline: none;
}

`