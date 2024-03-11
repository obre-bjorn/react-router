import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from './Homepage'
import Catalog from "./Catalog";
import Employees from "./Employees";
import Item from "./Item";
import Employee from "./Employee";
import ErrorPage from "./errorPage"


function Router(){

    const router = createBrowserRouter([
        {
            path:'/',
            element: <Homepage/>,
            errorElement: <ErrorPage/>
        },
        {
            path: 'employees',
            element: <Employees/>,
            children: [
                {
                    path:':empId',
                    element: <Employee/>
                }
            ]
        },
        {
            path: 'catalog/:itemId',
            element: <Item/>,
        },
        {
            path:'catalog',
            element: <Catalog />,
        },
    ])



    return <RouterProvider router= {router}/>


}


export default Router;

