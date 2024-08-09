import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { ThirdwebProvider } from 'thirdweb/react';

// Implement Chain Id for web Network
const AMOY_CHAIN = 80002; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThirdwebProvider desiredChainId={AMOY_CHAIN}>
    <App />
  </ThirdwebProvider>,
)
