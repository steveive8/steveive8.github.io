import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
    * {
        box-sizing: border-box;
    }
    @font-face {
        font-family: 'telegrafico';
        font-style: normal;
        font-weight: normal;
        src: local('telegrafico'), url('./telegrafico.woff') format('woff');
    }
    body {
        font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, 'telegrafico';
        .mapboxgl-ctrl-bottom-left {
            opacity: 0.7;
        };
        color: white;
        background-color: rgb(3,3,3);
    }
    a {
        text-decoration: none;
        color: black;
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
`;
//        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif, 'telegrafico';
//        -webkit-font-smoothing: antialiased;
//-moz-osx-font-smoothing: grayscale;