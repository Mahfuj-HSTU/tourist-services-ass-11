import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Blog from '../pages/Blog/Blog';
import Home from '../pages/Home/Home';
import ServiceDetails from '../pages/Home/Services/ServiceDetails/ServiceDetails';
import ServicesCard from '../pages/Home/Services/ServicesCard';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

const router = createBrowserRouter( [
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services/:id',
                loader: ( { params } ) => fetch( `http://localhost:5000/services/${ params.id }` ),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Register></Register>
            }
        ]
    }
] )

export default router
