import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300&display=swap');
//font-family: 'Montserrat', sans-serif;

    :root {
        --color-white: #fff;
        --color-dark: #101010f2;
        --color-bg: #F6F6F6;
        --color-gray: #CEC6CE;
        --color-primary: #5D405C;
        --color-secundary: #828282;
        --color-blue: #26A0FC;
        --color-green: #26E7A6;
        --color-yellow: #FEBC3B;
}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    main {
        max-width: 100vw;
        margin: 0 auto;
        padding: 5rem 1.2rem;
    }
    
    body.light {
        background-color: var(--color-bg);

        h1 {
            color: var(--color-primary);
        }
    }

    body.dark {
        background-color: var(--color-dark);
        h1 {
            
        color: var(--color-white);
        }
    }

    ::-webkit-scrollbar {
        display: none;
}

`