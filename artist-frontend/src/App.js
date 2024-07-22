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
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import UpdateDetails from "./components/UpdateDetails/UpdateDetails";
import UserRoute from "./components/UserRoute/UserRoute";
import Gallery from "./components/Gallery/Gallery";
import AllGallery from "./components/AllGallery/AllGallery";
import EditGallery from "./components/EditGallery/EditGallery";


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
             
             

             <Route element={<UserRoute />}>
             <Route  path="register" element={<RegisterPage />}/>
             <Route  path="login" element={<LoginPage />}/>
             </Route>

             <Route element={<PrivateRoute />}>
             <Route  path="artistprofile" element={<ArtistProfile />}/>
             <Route  path="updatedetails" element={<UpdateDetails />}/>
             <Route  path="gallery" element={<Gallery />}/>
             <Route  path="allgallery" element={<AllGallery />}/>
             <Route  path="editgallery" element={<EditGallery />}/>
             </Route>
             <Route  path="*" element={<ErrorPage />}/>

          </Route>
      </Routes>
    </div>
  );
}

export default App;
