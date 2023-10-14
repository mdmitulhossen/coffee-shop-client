import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import ProductAdd from "../pages/ProductAdd";
import CoffeeDetails from "../pages/CoffeeDetails";
import NotFoundPage from "../pages/NotFoundPage";


const Routes = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        errorElement:<NotFoundPage/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/coffee/add',
                element: <ProductAdd update={false}/>
            },
            {
                path:'/coffee/update/:id',
                element: <ProductAdd update={true}/>
            },
            {
                path:'/coffee/details/:id',
                element: <CoffeeDetails/>
            }
        ]

    }
])
   

export default Routes;