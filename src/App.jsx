import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import DashboardAdmin from './pages/Admin/dashboardAdmin'
import Login from './pages/login'
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
      <Route path='/admin/dashboard' element={<DashboardAdmin/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
