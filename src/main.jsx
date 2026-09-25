// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx'

document.querySelectorAll(
  'title, meta[name="description"], meta[name="author"], link[rel="canonical"]'
).forEach(el => el.remove());

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </HelmetProvider>
)