import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import Store from './store/store.jsx'
import ToastContainer from './components/common/Toasts/ToastContainer.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <App />
    <ToastContainer />
  </Provider>
)
