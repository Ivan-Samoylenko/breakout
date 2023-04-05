import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,*::before,*::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;

        background-color: #224;
    }

    h1,h2,h3,h4,p,ul {
        margin-top: 0;
        margin-bottom: 0;
    }

    ul {
        padding-left: 0;

        list-style: none;
    }

    a {
        text-decoration: none;
    }

    svg,img {
        display: block;
    }

    img {
        width: 100%;
        height: auto;
    }
`;
