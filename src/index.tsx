import React from 'react';
import {ThemeProvider} from 'styled-components/native';

import light from './styles/themes/light';

import Home from './screens/Home';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
