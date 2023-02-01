import React from 'react';
import { createBrowserRouter } from 'react-router-dom'; 
import Main from '../../Layout/Main';
import ErrorPage from '../../Pages/ErrorPage';
import Home from '../../Pages/Home';
import ReadingHistory from '../../Pages/ReadingHistory';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/history',
                element: <ReadingHistory></ReadingHistory>
            }
        ]
    }
])