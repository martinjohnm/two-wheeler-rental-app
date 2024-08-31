

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { Toaster } from 'sonner'
import { Bikes } from './pages/Bikes'

function App() {
  return (
    <BrowserRouter>
      <Toaster position='top-right' richColors/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/bikes' element={<Bikes/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
