

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing } from './pages/Landing'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { Toaster } from 'sonner'
import { Bikes } from './pages/Bikes'
import { AuthorizeUser, ProtectUser } from './protected/AuthUser'

function App() {
  return (
    <BrowserRouter>
      <Toaster position='top-right' richColors/>
      <Routes>
            {/* User ROutes ====================== */}
            <Route path='/' element={
              <ProtectUser>
                <Landing/>
              </ProtectUser>} 
            />
            <Route path='/signup' element={
              <ProtectUser>
                <SignUp/>
              </ProtectUser>} 
            />
            <Route path='/login' element={
              <ProtectUser>
                <Login/>
              </ProtectUser>} 
            />
            <Route path='/bikes' element={
              <AuthorizeUser>
                <Bikes/>
              </AuthorizeUser>
            } 
            />
      
      </Routes>
    </BrowserRouter>
  )
}

export default App
