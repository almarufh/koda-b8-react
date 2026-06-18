import { RouterProvider, createBrowserRouter } from 'react-router';

import Login from './pages/auth/Login.jsx';
import Register from './pages/auth/Register.jsx';
import Forgot from './pages/auth/Forgot.jsx';
// import LandingPage from './pages/main/LandingPage.jsx';
import React from 'react';
import AuthContext from './contexts/AuthContext.jsx';
import AuthLayout from './pages/auth/AuthLayout.jsx';

const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <LandingPage />,
  // },
  {
    path: '/auth',
    element:  <AuthLayout />,
    children: [
      {
        path: '/auth/login',
        element: <Login />,
      },
      {
        path: '/auth/register',
        element: <Register />,
      },
      {
        path: '/auth/forgot-password',
        element: <Forgot />,
      }
    ]
  },
])

function App() {
  const [auth, setAuth] = React.useState(AuthContext)
  return (
    <AuthContext value={{auth, seAuth}}>
      <RouterProvider router={router} />
    </AuthContext>
  );
}

export default App;