import { createSlice } from "@reduxjs/toolkit";
import Featured1 from "../images/featured-1.jpg";
import Featured2 from "../images/featured-2.jpg";
import Featured3 from "../images/featured-3.jpg";
import Featured4 from "../images/featured-4.jpg";
import image_1 from '../images/art-one.png'
import image_2 from '../images/calendar.png'
import image_3 from '../images/artist-img.png'
import image_4 from '../images/artist-img-2.png'
import image_5 from '../images/artist-img-3.png'
import image_6 from '../images/second-art.jpg'
import image_7 from '../images/third-art.jpg'



const initialState = {
  featuredartists: [
    {
      id: '1',
      img: Featured1,
      name: "Alexandra Gilton",
      info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam`,
    },

    {
      id: '2',
      img: Featured2,
      name: "Alexander Gilton",
      info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam`,
    },

    {
      id: '3',
      img: Featured3,
      name: "Alexandra Gilbon",
      info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam`,
    },

    {
      id: '4',
      img: Featured4,
      name: "Alexandra Farton",
      info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam`,
    },
  ],
  sliderdata: [
   {
      id: '1',
      slideinfo1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute iroccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,
      firstimage: image_1,
      secondimage: image_2,
      artist_name: 'Jackson Styles',
      artist_image: image_3,
      event_date: '23,Nov 2024'
   },
   {
      id: '2',
     slideinfo1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
     Duis aute iroccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,
     firstimage: image_6,
     secondimage: image_2,
     artist_name: 'Helena Bryan',
     artist_image: image_4,
     event_date: '2,April 2024'
  },
  {
     id: '3',
     slideinfo1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
     Duis aute iroccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,
     firstimage: image_7,
     secondimage: image_2,
     artist_name: 'Collins Black',
     artist_image: image_5,
     event_date: '20,Dec 2025'
  },
  ],
  upcomingevents: [
   {
      id: '1',
      img1: image_3,
      img2: image_4,
      img3: image_5,
      eventname: "Alcatraz Inhibition",
      eventdate: "4,August,2024",
      eventlocation: "London, UK",
      eventdesc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
      reprehenderit in voluptate velit esse cillumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cons`
   }
  ],
  history: [
   {
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam,`,
      img1: image_1,
      img2: image_3,
      img3: image_4,
   },

  ],
  artists: [
   {
      id: '1',
      name: 'Davies Luke',
      img: image_3,
   },
   {
      id: '2',
      name: 'Emily Black',
      img: image_4,
   },
   {
      id: '3',
      name: 'Gideon James',
      img: image_5,
   },
   {
      id: '4',
      name: 'Usain bolt',
      img: image_3,
   },
   {
      id: '5',
      name: 'Rose Gatlin',
      img: image_4,
   },
   {
      id: '6',
      name: 'John Black',
      img: image_5,
   },
   {
      id: '7',
      name: 'Emily Rose',
      img: image_3,
   },
   {
      id: '8',
      name: 'Ryan Garcia',
      img: image_4,
   },
  ]
};

export const dataSlice = createSlice({
  name: "appdata",
  initialState,
  reducers: {
    getFeaturedArtists: (state, action) => {
      state.featuredartists = action.payload;
    },
    getSliderData: (state, action) => {
      state.sliderdata = action.payload;
    },
    getUpcomingEvents: (state, action) => {
      state.upcomingevents = action.payload;
    }
  },
});

export const { getFeaturedArtists, getSliderData, getUpcomingEvents } = dataSlice.actions;
export default dataSlice.reducer;
