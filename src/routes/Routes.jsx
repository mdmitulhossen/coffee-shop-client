import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import ProductAdd from "../pages/ProductAdd";
import CoffeeDetails from "../pages/CoffeeDetails";
import NotFoundPage from "../pages/NotFoundPage";
import { baseURL } from "../utilitis/helper";


const Routes = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        errorElement:<NotFoundPage/>,
        children:[
            {
                path:'/',
                element: <Home/>,
                loader:()=>fetch(`${baseURL}/coffee`)
            },
            {
                path:'/coffee/add',
                element: <ProductAdd update={false}/>
            },
            {
                path:'/coffee/update/:id',
                element: <ProductAdd update={true}/>,
                loader:({params})=>fetch(`${baseURL}/coffee/${params.id}`)
            },
            {
                path:'/coffee/details/:id',
                element: <CoffeeDetails/>,
                loader:({params})=>fetch(`${baseURL}/coffee/${params.id}`)
            }
        ]

    }
])
   

export default Routes;