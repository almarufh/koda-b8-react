import React from 'react'
import { createBrowserRouter } from 'react-router'
import AuthLayout from '../src old/pages/auth/AuthLayout'
import Login from '../src old/pages/auth/Login'
import ForgotPaasword from './pages/auth/ForgotPaasword'
import Register from '../src old/pages/auth/Register'

const router = createBrowserRouter([
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'forgot-password',
                element: <ForgotPaasword />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    }
])

function App() {
  return (
    <div>App</div>
  )
}

export default App