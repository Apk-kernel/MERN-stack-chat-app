import { StrictMode } from 'react' // this is the reason socket.io-client shows user connected / disconnected twice.
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {BrowserRouter} from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter><App/></BrowserRouter>
  </StrictMode>,
)


// the reason for the message occuring twice ( connected/disconnected ) is that in app.jsx useAuth is run twice.