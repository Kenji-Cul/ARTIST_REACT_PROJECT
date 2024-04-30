import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ArtistPage from './pages/ArtistPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import RegisterPage from './pages/RegisterPage';
import ArtistProfile from './pages/ArtistProfile';


const router = createBrowserRouter([
     {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {index: true, element: <Home />},
            {path: "about", element: <AboutPage />},
            {path: "artists", element: <ArtistPage />},
            {path: "events", element: <EventsPage />},
            {path: "contactus", element: <ContactPage />},
            {path: "register", element: <RegisterPage />},
            {path: "artistprofile", element: <ArtistProfile />},
        ]
     }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

