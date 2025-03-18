import { createBrowserRouter, Navigate } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import Categories from "../components/Categories";
import NewsDetails from "../Pages/NewsDetails";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Layouts></Layouts>,
        children: [
            {
                path: '/',
                element: <Navigate to={'/category/01'}></Navigate>
            },
            {
                path: '/category/:id',
                element: <Categories></Categories>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: '/news/:id',
        element: <NewsDetails></NewsDetails>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path: '*',
        element: <h1 className="text-4xl text-red-600">Error page</h1>
    }
]);


export default router;