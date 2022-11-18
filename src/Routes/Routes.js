import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import AddServices from '../pages/AddServices/AddServices';
import Blog from '../pages/Blog/Blog';
import Home from '../pages/Home/Home';
import ServiceDetails from '../pages/Home/Services/ServiceDetails/ServiceDetails';
import Services from '../pages/Home/Services/Services';
import Login from '../pages/Login/Login';
import MyReview from '../pages/MyReview/MyReview';
import Register from '../pages/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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
                path: '/services',
                element: <Services></Services>
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
            },
            {
                path: '/myReview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/addServices',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            }
        ]
    }
] )

export default router
