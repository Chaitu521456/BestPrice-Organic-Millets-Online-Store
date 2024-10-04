import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import './App.css';
import Home from './Components/home/Home';
import Register from './Components/register/Register';
import Login from './Components/login/Login';
import Cart from './Components/cart/Cart';
import About from './Components/about/About';
import Feedback from './Components/feedback/Feedback';
import Faqs from './Components/faqs/Faqs';

import Mix from './Components/details/Mix';
import Barnyard from './Components/details/Barnyard';
import Browntop from './Components/details/Browntop';
import Finger from './Components/details/Finger';
import Foxtail from './Components/details/Foxtail';
import Great from './Components/details/Great';
import Kodo from './Components/details/Kodo';
import Little from './Components/details/Little';
import Pearl from './Components/details/Pearl';
import Proso from './Components/details/Proso';

function App({ children }) {
  const browserRouter = createBrowserRouter([
    {
      path: '',
      element: <RootLayout />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'register',
          element: <Register />,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'cart',
          element: <Cart />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'feedback',
          element: <Feedback />,
        },
        {
          path: 'faqs',
          element: <Faqs />,
        },
        {
          path: 'details/foxtail',
          element: <Foxtail />,
        },
        {
          path: 'details/barnyard',
          element: <Barnyard />,
        },
        {
          path: 'details/browntop',
          element: <Browntop />,
        },
        {
          path: 'details/finger',
          element: <Finger />,
        },
        {
          path: 'details/great',
          element: <Great />,
        },
        {
          path: 'details/kodo',
          element: <Kodo />,
        },
        {
          path: 'details/little',
          element: <Little />,
        },
        {
          path: 'details/pearl',
          element: <Pearl />,
        },
        {
          path: 'details/proso',
          element: <Proso />,
        },
        {
          path: 'details/mix',
          element: <Mix />,
        }
      ],
    },
  ]);

  return <RouterProvider router={browserRouter}>{children}</RouterProvider>;
}

export default App;
