import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import Store from './store/store.jsx'
import { ToastProvider } from './store/toastSlice.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <ToastProvider>
      <App />
    </ToastProvider>
  </Provider>
)