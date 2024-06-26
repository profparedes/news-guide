import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Barlow', sans-serif !important;
    };

    html, body, #root{
        min-height: 100vh;
    };

    p {
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        color: inherit !important;
        text-decoration: none !important;
    }

    a:hover {
        color: inherit !important;
    }

`
