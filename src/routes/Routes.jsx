import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";


const Routes = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        
    }
])
   

export default Routes;