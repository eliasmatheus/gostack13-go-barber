import React from 'react';
// import { BrowserRouter } from 'react-router-dom';

import SignIn from './pages/SignIn';

// import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    {/* <BrowserRouter>
      <Routes />
    </BrowserRouter> */}
    <SignIn />
    <GlobalStyle />
  </>
);

export default App;
