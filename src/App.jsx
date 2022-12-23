
import DashboardAdmin from './pages/Admin/dashboardAdmin'
import ListOrderAdmin from './pages/Admin/listOrder'
import Login from './pages/login'
import AddService from './pages/Partner/addService'
import Dashboard from './pages/Partner/dashboard'
import ListOrder from './pages/Partner/listOrder'
import RegisterPartner from './pages/registerPartner'
import RegisterUser from './pages/registerUser'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path='/login' element={<Login role='admin' />} />
        <Route path='/register/user' element={<RegisterUser />} />
        <Route path='/register/partner' element={<RegisterPartner />} />
        <Route path='/admin/' element={<DashboardAdmin />} />
        <Route path='/admin/list-order' element={<ListOrderAdmin/>}/>
        <Route path='/partner/' element={<Dashboard/>}/>
        <Route path='/partner/add-service' element={<AddService/>}/>
         <Route path='/partner/list-order' element={<ListOrder/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
