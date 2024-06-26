import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };

    html, body, #root{
        min-height: 100vh;
        font-family: 'Barlow', sans-serif;
    };

    p {
        margin-top: 0;
        margin-bottom: 0;
        font-family: 'Barlow', sans-serif !important;
    }

    span {
        font-family: 'Barlow', sans-serif !important;
    }

    a {
        color: inherit !important;
        text-decoration: none !important;
    }

    a:hover {
        color: inherit !important;
    }

`
