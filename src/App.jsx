import { 
  RouterProvider, 
  createBrowserRouter, 
  Navigate 
} from 'react-router';
import React from 'react';
import AuthContext from './contexts/AuthContext.jsx';
import AuthLayout from './pages/auth/AuthLayout.jsx';
import Login from './pages/auth/Login.jsx';
import Register from './pages/auth/Register.jsx';
import Forgot from './pages/auth/Forgot.jsx';
import LandingPage from './pages/main/LandingPage.jsx';

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="login" replace />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'forgot-password',
        element: <Forgot />,
      }
    ]
  },
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  }
]);

function App() {
  const [auth, setAuth] = React.useState(null);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;