import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Config from '../webConfig.json';
import { BrowserRouter } from 'react-router-dom';

// ***** you can Config your web document head in webConfig.json

// change a document title
document.title = Config.document.title

//change a document image
const icon = document.querySelector('link[rel=icon]')
icon.href = Config.document.iconPath 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
