import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import DashBoard from './pages/DashBoard.jsx'
import Transaction from './pages/Transaction.jsx'
import Support from './pages/Support.jsx'
import { NavBarProvider } from './contextAPI/useNavBar.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Signupmessage from './pages/Signupmessage.jsx'
import { FirebaseProvider } from './contextAPI/useFirebase.jsx'
import Forgot from './pages/Forgot.jsx'
import ResetMessage from './pages/ResetMessage.jsx'
import EmailMessage from './pages/EmailMessage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <HashRouter>
        <NavBarProvider>
          <Routes>
            <Route path='/' element={<App />}>
              <Route index element={<Signup />} />
              <Route path='signup' element={<Signup />} />
              <Route path='message' element={<Signupmessage />} />
              <Route path='login' element={<Login />} />
              <Route path='forgot' element={<Forgot />}/>
              <Route path='email/message' element={<EmailMessage />}/>
              <Route path='reset/message' element={<ResetMessage />}/>
              <Route path='dashboard' element={<DashBoard />} />
              <Route path='transaction' element={<Transaction />} />
              <Route path='support' element={<Support />} />
            </Route>
          </Routes>
        </NavBarProvider>
      </HashRouter>
    </FirebaseProvider>
  </React.StrictMode>,
)
