import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import PageNotFound from './404'
import DashboardAdmin from './pages/Admin/dashboardAdmin'
import ListOrderAdmin from './pages/Admin/listOrder'
import Profile from './pages/Admin/profile'
import VerifyPartner from './pages/Admin/verifyPartner'
import Login from './pages/login'
import AddService from './pages/Partner/addService'
import ConfirmOrder from './pages/Partner/confirmorder'
import Dashboard from './pages/Partner/dashboard'
import EditService from './pages/Partner/editService'
import ListOrder from './pages/Partner/listOrder'
import RevisiRegister from './pages/Partner/revisiRegister'
import RegisterPartner from './pages/registerPartner'
import RegisterUser from './pages/registerUser'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login role='admin'/>}/>
      <Route path='/register/user' element={<RegisterUser/>}/>
      <Route path='/register/partner' element={<RegisterPartner/>}/>
      <Route path='/admin/' element={<DashboardAdmin/>}/>
      <Route path='/admin/list-order' element={<ListOrderAdmin/>}/>
      <Route path='/admin/profile' element={<Profile/>}/>
      <Route path='/admin/verify-partner' element={<VerifyPartner/>}/>
      <Route path='/partner/' element={<Dashboard/>}/>
      <Route path='/partner/add-service' element={<AddService/>}/>
      <Route path='/partner/edit-service' element={<EditService/>}/>
      <Route path='/partner/list-order' element={<ListOrder/>}/>
      <Route path='/partner/profile' element={<Profile/>}/>
      <Route path='/partner/confirm-order' element={<ConfirmOrder/>}/>
      <Route path='/partner/revisi-registrasi' element={<RevisiRegister/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
