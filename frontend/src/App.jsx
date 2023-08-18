import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Initial from "./pages/initial";
import Nav from "./Components/Nav";
import Home from "./pages/home";
import Write from "./pages/Write";
import Postage from "./pages/Postage";
import Header from "./Components/header";

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Nav/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/> ,
      },
      {
        path: "/post/:id",
        element: <Postage/> ,
      },
      {
        path: "/write",
        element: <Write/> ,
      }
    ]
  },
  {
    path: "/initial",
    element: <Initial/> ,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
