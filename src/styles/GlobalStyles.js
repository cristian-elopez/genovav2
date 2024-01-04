import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }
    body {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
    }
    a {
        text-decoration: none;
    }
    li {
        list-style: none;
    }
`;