import React , {useState} from 'react';
import Intro from './intro';
import Main from './main';
import GlobalStyles from '../Styles/GlobalStyles';

export const App = ({}) => {
  const [page, setPage] = useState(0);
  return (
    <>
      <GlobalStyles />
      <div style={{width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative'}}>
        <Intro page={page} setPage={setPage} />
        {page === 2 && <Main page={page} setPage={setPage} />}
      </div>
    </>
  )
}

export default App;