import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { faEyeSlash, faEye, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Gallery.css';
import styled from 'styled-components';
import { gallerySelector, createGallery, clearState } from '../../features/gallerySlice';
import { useDispatch, useSelector } from 'react-redux';

const StyledLabel = styled.label`
color: #E0A96D;
font-weight: bold;
`;

const Gallery = () => {

    let user = localStorage.getItem("userdetails");
    let userdata = JSON.parse(user);

    const nameInput = useRef();
    const filevalue = useRef();
    const errDiv = useRef();

    const [galleryname, setGalleryName] = useState("");
    const [success, setSuccess] = useState(false);
    const [file, setFile] = useState("");
    const [fname, setFname] = useState("");
    const [fsize, setFsize] = useState();
    const [errorMessage, setErrorMessage] = useState("");

    const dispatch = useDispatch();
    const { isFetching, isSuccess, isError, errorMsg } = useSelector(
        gallerySelector
     );

     useEffect(() => {
      if (isError) {
          
          dispatch(clearState()); 
      }
   
      if (isSuccess) {
          dispatch(clearState());
          setSuccess(true);
         
        
           }
   }, [isError, isSuccess]);


    const handleSubmit = async (e) => {
      e.preventDefault();
     
      filevalue.current.value = "";
      let user_id = userdata.id;
    
     
   
      let data = {galleryname,fname,user_id,file};

      setGalleryName("");
     
     
    // console.log(data);
    if(fsize > 2097152){
          //  console.log("File must be less than 2mb");
           setErrorMessage("File must be less than 2mb");
    } else {
      // console.log(data);
      dispatch(createGallery(data));
      setErrorMessage("");

     
      // console.log(file);
    }
      
    }


    const handleChange = (e) => {
      function getBase64(file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          setFile(reader.result);
          // console.log(reader.result);
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
     }
     
     var file = e.target.files[0];
    
     setFname(file.name);
     setFsize(file.size);
     getBase64(file);
        
    }

  return (
    <div className="register-form-container">
   {
      success ? (<div className="form-container">
              <div className="success-div">
                 <h3>Success!</h3>
                <FontAwesomeIcon icon={faCircleCheck} />
                <Link to='/artistprofile' className="success-link">Back To Profile</Link>
              </div>
              <p  ref={errDiv}></p>
      </div> ) : (
           <div className="form-container">
           <h3>Create Your Gallery</h3>
      
        <form className="register-form" onSubmit={handleSubmit}  encType="multipart/form-data">

        <div className="input-div">
      <StyledLabel for="name">Add Name: </StyledLabel>
      <input type="text" placeholder="Enter gallery name" name="galleryname" ref={nameInput} value={galleryname} onChange={(e) => setGalleryName(e.target.value)}  />
      </div>

      <div className="input-div">
      <StyledLabel for="myfile">Add Image: </StyledLabel>
      <input type="file" id="myfile" name="myfile" accept="image/*" ref={filevalue} onChange={handleChange} />
      { errorMessage !=""
 ? <p className="error-msg" ref={errDiv}>{errorMessage}</p> : null}
      </div>
      
        
        
      {isFetching ?  <button>Loading...</button> :  <button type="submit">Create Gallery</button>}

        </form>
      
        </div>
      )
    }
 
</div>
  )
}

export default Gallery
