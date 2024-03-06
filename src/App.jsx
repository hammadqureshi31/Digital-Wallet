import React from 'react'
import Navbar from './components/Navbar'
import Sidenav from './components/Sidenav'
import { Outlet } from 'react-router-dom'
import { useNavBar } from './contextAPI/useNavBar'

const App = () => {
  const { OpenNav } = useNavBar()
  return (
    <>
      <div className='flex'>
        {OpenNav && <Sidenav />}
        <div>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
