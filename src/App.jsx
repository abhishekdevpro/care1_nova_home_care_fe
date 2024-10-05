import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import MultiStepForm from './Components/Forms/Form'
import JobForm from './Components/Forms/JobForm'
import JobseekerForm from './Components/Forms/JobseekerForm'
import RegisterForm from './Pages/Register'
import LoginForm from './Pages/Login'
import ForgotPassword from './Pages/Forgot-password'
import ChangePassword from './Pages/Change-password'

const App = () => {
  return (
   <>
      <BrowserRouter>
          {/* <Navbar/> */}

      {/* pages  */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<MultiStepForm />} />
        <Route path='/job-form' element={<JobForm />}/>
        <Route path='/jobseeker-form' element={<JobseekerForm />}/>
      </Routes>
      {/* pages */}
      <Routes>
        <Route path='/register' element={<RegisterForm />}/>
        <Route path='/login' element={<LoginForm />}/>
        <Route path='/forgot-password' element={<ForgotPassword />}/>
        <Route path='/change-password' element={<ChangePassword />}/>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App