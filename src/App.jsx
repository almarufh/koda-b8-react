import { RouterProvider, createBrowserRouter } from 'react-router';

import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;