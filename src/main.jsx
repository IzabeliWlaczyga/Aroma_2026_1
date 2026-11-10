import './index.css'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { CartProvider } from './contexts/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <CartProvider>
        <App />
      </CartProvider>
    </ChakraProvider>
  </StrictMode>,
)
