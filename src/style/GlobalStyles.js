import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
      }      
    @font-face {
        font-family: 'Geometos';
        font-style: normal;
        font-weight: normal;
        src: local('Geometos'), url('./Geometos.ttf') format('ttf');
    }
    body {
        font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, 'telegrafico';
        .mapboxgl-ctrl-bottom-left {
            opacity: 0.7;
        };
        color: white;
        background-color: black;
    }
    a {
        text-decoration: none;
        color: #00dcff;
        cursor: pointer;
    }
    input {
        border: 0;
    }
    input:focus {
        outline: none;
    }
    .mapboxgl-canvas {
        outline: none;
    }
    ::-webkit-scrollbar {
        width: 0px;
    }
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
    }
    .jupyter {
        strong {
            font-weight: 500;
        }
        p {
            line-height: 22px;
            font-size: 15px;
        }
        h2 {
            line-height: 30px;
        }
        blockquote {
            margin: 10px 0px;
            line-height: 20px;
        }
        ul, ol {
            margin: 15px;
            list-style: disc;
            line-height: 22px;
        }
    }
    .jupyter-viewer {
        position: relative;
        left: -2.5%;
    }
    .block .block-light {
        width: 2px;
        margin: 0 5px 0 0;
        border-radius: 2px;
        background-color: #00dcff;
        opacity: 0;
        :hover {
            opacity: 1;
            cursor: pointer;
            background-color: #00dcff;
        }
    }
    .block .block-light-selected {
        width: 2px;
        margin: 0 5px 0 0;
        border-radius: 2px;
        background-color: #00dcff;
        cursor: pointer;
    }
    .block .cell-row .cell-content.output-std {
        line-height: 20px;
    }
    .description {
        h1 {
            font-weight: 500;
            font-size: 30px;
            margin: 10px 0;
        }
        p, ul {
            line-height: 28px;
        }
        li {
            list-style-type: disc;
            margin-left: 18px;
        }
    }
`;