import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='root'> {/* Apply styles to stretch root */}
      <App />
    </div>
  </React.StrictMode>,
)
