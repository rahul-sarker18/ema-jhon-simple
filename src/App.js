import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Main from './layouts/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import Login from "./components/logIn/Login";
import Signup from "./components/signup/Signup";
import Shipping from './components/Shipping/Shipping';
import Parivetrour from './Rout/Parivetrour';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          // loader: () => fetch("https://ema-john-sarver-rahul-sarker18.vercel.app/products"),
          element: <Shop></Shop>,
        },
        {
          path: "orders",
          loader: productsAndCartLoader,
          element: <Orders></Orders>,
        },
        {
          path: "inventory",
          element: <Inventory></Inventory>,
        },
        {
          path: "shipping",
          element: <Parivetrour><Shipping></Shipping></Parivetrour>,
        },
        {
          path: "about",
          element: <About></About>,
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "signup",
          element: <Signup></Signup>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
