
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
        <Route path='/admin/dashboard' element={<DashboardAdmin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
