import { RouterProvider, createBrowserRouter } from 'react-router';

import Login from './pages/auth/Login.jsx';
import Register from './pages/auth/Register.jsx';
import Forgot from './pages/auth/Forgot.jsx';
import LandingPage from './pages/main/LandingPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
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
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;