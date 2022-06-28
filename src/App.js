import { Route, Routes } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';

import Home from './pages/Home';
import Wallet from './pages/Wallet';
import Import from './pages/Import';
import Check from './pages/Check';
import Validate from './pages/Validate';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/check" element={<Check />} />
        <Route path="/import" element={<Import />} />
        <Route path="/validate" element={<Validate />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
