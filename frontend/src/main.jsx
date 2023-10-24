import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {BrowserRouter} from 'react-router-dom'
import ErrorPage from './errorpage'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  </React.StrictMode>,
)

    // const router = createBrowserRouter([
    //   {
    //     path: '/',
    //     element: <h1>Homepage</h1>,
    //     children: [
    //       {
    //         path: 'about',
    //         element: <h1>About page</h1>,
    //       },
    //     ],
    //     errorElement: <ErrorPage />,
    //   },
    // ])