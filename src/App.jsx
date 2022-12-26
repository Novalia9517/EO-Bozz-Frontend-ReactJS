
import DashboardAdmin from './pages/Admin/dashboardAdmin'
import Login from './pages/login'
import RegisterPartner from './pages/registerPartner'
import RegisterUser from './pages/registerUser'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import OrderUser from './pages/OrderUser'
import TransactionList from './pages/TransactionList'
import Rating from './pages/Rating'
import ProfileUser from './pages/ProfileUser'
import Payment from './pages/Payment'
import ProfilePartner from './pages/ProfilePartner'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/orderuser" element={<OrderUser />} />
        <Route path="/transaction" element={<TransactionList />} />
        <Route path="/orderdetail" element={<Rating />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/profile" element={<ProfileUser />} />
        <Route path="/profilepartner" element={<ProfilePartner />} />
        <Route path='/login' element={<Login role='admin' />} />
        <Route path='/register/user' element={<RegisterUser />} />
        <Route path='/register/partner' element={<RegisterPartner />} />
        <Route path='/admin/dashboard' element={<DashboardAdmin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
