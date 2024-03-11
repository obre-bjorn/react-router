import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from './Homepage'
import Catalog from "./Catalog";
import Item from "./Item";
import ErrorPage from "./errorPage"


function Router(){

    const router = createBrowserRouter([
        {
            path:'/',
            element: <Homepage/>,
            errorElement: <ErrorPage/>
        },
        {
            path: 'catalog/:itemId',
            element: <Item/>,
        },
        {
            path:'catalog',
            element: <Catalog />,
            children: [
                
            ]
        },
    ])



    return <RouterProvider router= {router}/>


}


export default Router;

