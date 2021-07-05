import React from 'react';
import GlobalStyles from './style/GlobalStyles';
import {BrowserRouter} from 'react-router-dom';
import Router from './router';

export const App = ({}) => {
  
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Router />
    </BrowserRouter>
  )
}

export default App;