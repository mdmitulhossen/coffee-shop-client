import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import ProductAdd from "../pages/ProductAdd";
import CoffeeDetails from "../pages/CoffeeDetails";


const Routes = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/coffee/add',
                element: <ProductAdd/>
            },
            {
                path:'/coffee/details/:id',
                element: <CoffeeDetails/>
            }
        ]

    }
])
   

export default Routes;