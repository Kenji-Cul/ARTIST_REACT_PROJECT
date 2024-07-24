import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { faEyeSlash, faEye, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './DeleteGallery.css';
import styled from 'styled-components';
import axios from "axios";
import { gallerySelector, createGallery, clearState, deleteGallery } from '../../features/gallerySlice';
import { useDispatch, useSelector } from 'react-redux';
import LeftSvg  from '../../images/circle-arrow-left-solid-2.svg';

const StyledLabel = styled.label`
color: #E0A96D;
font-weight: bold;
`;

const DeleteGallery = () => {

    let user = localStorage.getItem("userdetails");
    let userdata = JSON.parse(user);
    const navigate = useNavigate();

    const [singlegallery, setGallery] = useState({
      img: "",
      name: "",
    });

    const queryParams = new URLSearchParams(window.location.search)
  const uniqueid = queryParams.get("gal_id");

  async function fetchData(){
    let link = `http://localhost:5000/artistgallery/${uniqueid}`;
    const response = await axios.get(link, {
      headers: {
          'Content-Type': 'application/json',
      },
      
  });

 
 const data = response.data.gallery;
 
if(data){
    if(data.length === 0){
        setGallery({img: "", name: ""})
       
     } else {
        setGallery({img: data.img, name: data.name});
      
     }
}
 
  
  }
  if(uniqueid){
    fetchData();
  }

    const nameInput = useRef();
    const filevalue = useRef();
    const errDiv = useRef();

    
// console.log(singlegallery.name);
   
    // const [galleryname, setGalleryName] = useState("");
    const [success, setSuccess] = useState(false);
    // const [file, setFile] = useState("");
    // const [fname, setFname] = useState("");
    // const [fsize, setFsize] = useState();
    const [errorMessage, setErrorMessage] = useState("");

    const dispatch = useDispatch();
    const { deleteFetching, deleteSuccess, deleteError, } = useSelector(
        gallerySelector
     );

    

     useEffect(() => {
      if (deleteError) {
          console.log(deleteError);
          dispatch(clearState()); 
      }
   
      if (deleteSuccess) {
          dispatch(clearState());
          setSuccess(true);
          
           }
   }, [deleteError, deleteSuccess]);


    const handleSubmit = async (e) => {
      e.preventDefault();
     
    //   filevalue.current.value = "";
      let user_id = uniqueid;
    
    //   setGalleryName("");
      let data = {user_id};
      dispatch(deleteGallery(data));

    // console.log(data);
    // if(fsize > 2097152){
    //       //  console.log("File must be less than 2mb");
    //        setErrorMessage("File must be less than 2mb");
    // } else {
    //   if(galleryname == ""){
    //     let galleryname = singlegallery.name;
     
    //     //console.log(data);
    //      dispatch(updateGallery(data));
    //   } 
      
    //   else {
    //     let data = {galleryname,fname,user_id,file};
    //     //console.log(data);
    //      dispatch(updateGallery(data));
    //   }

      setErrorMessage("");
      
      // console.log(file);
    }
      
    


    // const handleChange = (e) => {
    //   function getBase64(file) {
    //     var reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload = function () {
    //       setFile(reader.result);
    //       // console.log(reader.result);
    //     };
    //     reader.onerror = function (error) {
    //       console.log('Error: ', error);
    //     };
    //  }
     
    //  var file = e.target.files[0];
    
    //  setFname(file.name);
    //  setFsize(file.size);
    //  getBase64(file);
        
    // }
   
       
    let galleryimage2 = `http://localhost:5000/galleryuploads/no-gallery.jpg`;

    const moveToAllGallery = () =>{
      navigate('/allgallery');
      window.location.reload();
    }
   
  return (
    <div className="register-form-container">
   {
      success ? (<div className="form-container">
              <div className="success-div">
                 <h3>Success!</h3>
                <FontAwesomeIcon icon={faCircleCheck} />
                <Link  className="success-link" onClick={() => {moveToAllGallery()}}>Back To Galleries</Link>
              </div>
              <p  ref={errDiv}></p>
      </div> ) : (
           <div className="form-container">
        
           {
                  
                 singlegallery.img === null ? 

            <div className="no-gallery">
              <img src={galleryimage2} alt="" />
              <h4>No Gallery image found!</h4>
         </div>
            
              : 
              <div>
             
              <div className="gallery-heading"> <Link to="/allgallery"><img src={LeftSvg}/></Link>  <h3>Delete Your {singlegallery.name}</h3></div>
                      <div className="gallery-art">
                      <img src={`http://localhost:5000/galleryuploads/${singlegallery.img}`} alt="" />
                     
                  </div>
                  </div>

          }
      
        <form className="register-form" onSubmit={handleSubmit}  encType="multipart/form-data">


      {deleteFetching ?  <button>Loading...</button> :  <button type="submit">Delete Gallery</button>}

        </form>
      
        </div>
      )
    }
 
</div>
  )

}


export default DeleteGallery
