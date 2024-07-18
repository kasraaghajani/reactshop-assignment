import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './config/Query.js'
import { PersistGate } from "redux-persist/integration/react";
import { persistStore} from "redux-persist"
import { store } from './redux/store.js'

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
  <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
    </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
