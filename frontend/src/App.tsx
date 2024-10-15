

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing } from './pages/Landing'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { Toaster } from 'sonner'
import { AuthorizeUser, ProtectUser } from './protected/AuthUser'
import { Home } from './pages/Home'
import { useCurrentUser } from './api/hooks/user/auth/useCurrentUser'
import { AvailableBikes } from './pages/AvailableBikes'
import { useGetCompanies } from './api/hooks/user/bikes/useGetCompanies'
import { useGetLocations } from './api/hooks/user/location/useGetLocation'
import { BookingPage } from './pages/BookingPage'
import { OrderSummry } from './pages/OrderSummary'
import { TotalBooking } from './pages/TotalBookings'
import { CheckOutPage } from './pages/CheckOutPage'
import { PaymentSuccess } from './pages/PaymentSuccess'


function App() {
  
  const { loading, error } = useCurrentUser();
  useGetCompanies()
  useGetLocations()
  if (loading) {
    return <div>
      Loading....
    </div>
  }

  if (error) {
    return <div>
      {error}
    </div>
  }
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
            <Route path='/home' element={
              <AuthorizeUser>
                <Home/>
              </AuthorizeUser>
            } 
            />
            <Route path='/available-bikes' element={
              <AuthorizeUser>
                <AvailableBikes/>
              </AuthorizeUser>
            } 
            />

            <Route path={`/book/:id`} element={
              <AuthorizeUser>
                <BookingPage/>
              </AuthorizeUser>
            } 
            />
            <Route path={`/checkout`} element={
              <AuthorizeUser>
                <CheckOutPage/>
              </AuthorizeUser>
            } 
            />

            <Route path={`/order-summary`} element={
              <AuthorizeUser>
                <OrderSummry/>
              </AuthorizeUser>
            } 
            />

            <Route path={`/payment-success`} element={
              <AuthorizeUser>
                <PaymentSuccess/>
              </AuthorizeUser>
            } 
            />

            <Route path={`/bookings`} element={
              <AuthorizeUser>
                <TotalBooking/>
              </AuthorizeUser>
            } 
            />

            
            {/* <Route path='/bikes' element={
              <AuthorizeUser>
                <Bikes/>
              </AuthorizeUser>
            } 
            />
            <Route path='/bike/:id' element={
              <AuthorizeUser>
                <Bike/>
              </AuthorizeUser>
            } 
            /> */}
      
      </Routes>
    </BrowserRouter>
  )
}

export default App
