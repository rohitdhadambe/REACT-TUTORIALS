import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';  // Assuming App component is being used elsewhere
import './index.css';
import { Route, RouterProvider, createBrowserRouter ,createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/about.jsx';  // Import the About component
import Contact from './components/contact/Contact.jsx';
import User from './components/user/User.jsx';
import Github from './components/github/Github.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />,  // Capitalized and imported
//       },
//       {
//         path: 'contact',
//         element: <Contact />,  // Capitalized and imported
//       },
//     ]
//   }
// ]);

//  OR U CAN DO BELOW 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route path='github' element={<Github />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
