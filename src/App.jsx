import { RouterProvider, createBrowserRouter } from 'react-router';

import Login from './pages/Login.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;