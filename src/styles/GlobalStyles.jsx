import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'PT Sans', sans-serif;
    }

    main {
        max-width: 100vw;
        margin: 0 auto;
        padding: 5rem 1.2rem;
    }
    :root {
        --color-white: #fff;
        --color-bg: #F6F6F6;
        --color-gray: #CEC6CE;
        --color-primary: #5D405C;
        --color-secundary: #828282;
        --color-blue: #26A0FC;
        --color-green: #70E6CA;
        --color-yellow: #FEBC3B;
    }

    ::-webkit-scrollbar {
  display: none;
}

`