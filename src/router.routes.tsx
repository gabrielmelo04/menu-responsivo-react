import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Product } from "./pages/product";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Error404 } from "./pages/error404";
import { AuthLayout } from "./pages/_layouts/auth";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthLayout />,
        children:[
            { path: '/' , element: <Home /> },
            { path: "/product", element: <Product /> },
            { path: "/about", element: <About /> },
            { path: "/contact", element: <Contact /> },
            { path: "*", element: <Error404 /> }
        ]
    },
])