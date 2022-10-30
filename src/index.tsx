import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ColorModeScript } from '@chakra-ui/react'
import theme from './theme';

import { Mainnet, DAppProvider, useTokenBalance, useEthers, Config, Goerli } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'

// import { Mainnet } from '@usedapp/core'

import { BrowserRouter, Outlet } from "react-router-dom";


const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
    [Goerli.chainId]: getDefaultProvider('goerli'),
  },
}
// const config = {
//   readOnlyChainId: Mainnet.chainId,
//   readOnlyUrls: {
//     [Mainnet.chainId]: 'https://mainnet.infura.io/v3/ab4e972030894b5a979e8a1c6640dc03',
//   },
// }

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <DAppProvider config={config}>
        
      <App />
      
    </DAppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
