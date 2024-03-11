import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './Homepage'
import Catalog from "./Catalog";
import Item from "./Item";


function Router(){


    const router = createBrowserRouter([
        {
            path:'/',
            element: <Homepage/>,
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

