import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        //Colors
        --light: #ffffff;
        --blue-dark: #0a0f19;
        --blue-darksky: #5E6D8C;


        //Fonts
        --font-family-title: 'Roboto', sans-serif;
        --font-family-text: 'Poppins', sans-serif;

        --font-size-large: 5rem;
        --font-size-medium: 3rem;
        --font-size-regular: 1.5rem;
        --font-size-small: .8rem;

        //Others
        --border-r: 0.25rem;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        border: none;
    }

    body {
        width: 100%;
        max-width: 1920px;
        background-color: #CCC;
    }

    textarea, button, select, input, span, a, h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-family-title);
    }
    h1, h2 {
        font-family: var(--font-family-title);
        font-size: 30px;        
    }

    p {
        font-family: var(--font-family-text);
    }

    a {
        color: inherit;
    }
    .container {
        width: 100%;
        margin: 0 auto;
        padding: 0 2rem;
    }
    
    #svg-map path {
  fill: #2E8B57
}

#svg-map text {
  fill: #000;
  font: 12px Arial-BoldMT, sans-serif;
  cursor: pointer
}

#svg-map a {
  text-decoration: none
}

#svg-map a:hover {
  cursor: pointer;
  text-decoration: none
}

#svg-map a:hover path {
  fill: #ADFF2F !important
}

#svg-map .circle {
  fill: #00FFFF
}

#svg-map a:hover .circle {
  fill: #FFFF00 !important;
  cursor: pointer
}
`;
