//React imports
import React from 'react'
import ReactDOM from 'react-dom/client'

//Style imports
import 'normalize.css'
import './index.scss'

//Component import
import Router from './routes'

//Main variable that will render all the aplication
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

//Call render() method
root.render(
  <React.StrictMode>
    <>
      <Router />
    </>
  </React.StrictMode>
)