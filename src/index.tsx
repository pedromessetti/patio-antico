//React imports
import React from 'react'
import ReactDOM from 'react-dom/client'

//IStyle imports
import 'normalize.css'
import './index.css'

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