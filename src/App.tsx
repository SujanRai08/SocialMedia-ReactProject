import React from 'react'
import './globals.css';
import { Routes,Route } from 'react-router-dom';
import SigninForms from './_auth/forms/SigninForms';
import { Home } from './_root/pages';
import SignupForms from './_auth/forms/SignupForms';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';

const App = () => {
  return (
        <main className='flex h-screen'>
            <Routes>
              <Route element={<AuthLayout />}> { /* selfclosing commponent */}
              {/* allows to use auth and pages  */}
              {/* public routes  */}
                <Route path='/sign-in' element={<SigninForms />}/>
                <Route path='/sign-up' element={<SignupForms />}/>
              </Route>
              {/* private routes  */}
              <Route element= {<RootLayout />}>
                <Route index element ={<Home />}/>
              </Route>
            </Routes>
        </main>
  )
}

export default App