import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import EventsPage from "./pages/EventsPage";
import Home from "./pages/Home";
import {Routes, Route, Navigate } from 'react-router-dom';
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ArtistProfile from "./pages/ArtistProfile";
import ErrorPage from "./pages/ErrorPage";
import ArtistPage from "./pages/ArtistPage";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Layout />}>
             <Route index element={<Home />}/>
             <Route  path="about" element={<AboutPage />}/>
             <Route  path="artists" element={<ArtistPage />}/>
             <Route  path="events" element={<EventsPage />}/>
             <Route  path="contactus" element={<ContactPage />}/>
             <Route  path="register" element={<RegisterPage />}/>
             <Route  path="login" element={<LoginPage />}/>
             <Route element={<PrivateRoute />}>
             <Route  path="artistprofile" element={<ArtistProfile />}/>
             </Route>
             <Route  path="*" element={<ErrorPage />}/>

          </Route>
      </Routes>
    </div>
  );
}

export default App;
