import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';  // Assuming App component is being used elsewhere
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layout.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/about.jsx';  // Import the About component

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'About',
        element: <About />,  // Capitalized and imported
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
