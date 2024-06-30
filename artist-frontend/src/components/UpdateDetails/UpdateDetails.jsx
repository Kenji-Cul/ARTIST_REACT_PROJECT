import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { faEyeSlash, faEye, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './UpdateDetails.css'
import styled from 'styled-components';
import { userSelector, updateUser, clearState } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";

const StyledLabel = styled.label`
       color: #E0A96D;
       font-weight: bold;
    `;

const UpdateDetails = () => {
    let link = "http://localhost:3000/updatedetails";
    let user = localStorage.getItem("userdetails");
  let userdata = JSON.parse(user);
  let secondlink = `http://localhost:3000/artists/${userdata.id}`;
  let filevalue = useRef();

  const [profile, setProfile] = useState({
    img: "",
    desc: "",
    username: "",
    userlocation: "",
    userphone: "",
  });

  async function fetchData(){
    const response = await axios.get(secondlink, {
      headers: {
          'Content-Type': 'application/json',
      },
      
  });

 
 const data = response.data.artist;
  // console.log(data);
  // profile.img = data.img;
  // profile.username = data.name;
  // profile.desc = data.description;
  // profile.location = data.location;
  // profile.phone = data.phone;
  setProfile(data);
 

   
  // console.log(profile);
  }
   fetchData();
   

   
    const dispatch = useDispatch();
    const { isFetching, isSuccess, isError, errorMsg } = useSelector(
        userSelector
     );
    const errDiv = useRef();
    const nameInput = useRef();
    const locationInput = useRef();
    const numberInput = useRef();
    const descInput = useRef();

    const [success, setSuccess] = useState(false);
    const [file, setFile] = useState("");
    const [fname, setFname] = useState("");
    const [fsize, setFsize] = useState();
    const [description, setDesc] = useState(profile.description === null ? "" : profile.description);
    const [username, setName] = useState(profile.name === null ? "" : profile.name);
    const [userlocation, setLocation] = useState(profile.location === null ? "" : profile.location);
    const [usernumber, setNumber] = useState(profile.phone === null ? "" : profile.phone);
    const [errorMessage, setErrorMessage] = useState("");


  
  

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
    
     
   
      let data = {description, file,user_id,fname,username,userlocation,usernumber,profile};

      setDesc("")
      setName("")
      setLocation("")
      setNumber("")
     
    // console.log(data);
    if(fsize > 2097152){
          //  console.log("File must be less than 2mb");
           setErrorMessage("File must be less than 2mb");
    } else {
      setDesc(description)
      dispatch(updateUser(data));
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

  // useEffect(() => {
  //   description.length === 0 ? setDesc(profile.description) : setDesc(descInput.current.value);
  //   username.length === 0 ? setName(profile.name) : setName(nameInput.current.value);
  //   location.length === 0 ? setDesc(profile.location) : setDesc(locationInput.current.value);
  //   number.length === 0 ? setNumber(profile.number) : setDesc(numberInput.current.value);
  //   //  setDesc(descInput.current.value)
  //   //  setName(nameInput.current.value)
  //   //  setLocation(locationInput.current.value)
  //   //  setNumber(numberInput.current.value)
  // },[])


   
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
           <h3>Update Your Details</h3>
      
        <form className="register-form" onSubmit={handleSubmit} encType="multipart/form-data">

        <div className="input-div">
      <StyledLabel for="name">Edit Name: </StyledLabel>
      <input type="text" placeholder="Edit Name" name="name" ref={nameInput} value={username} onChange={(e) => setName(e.target.value)} />
      </div>

      
      <div className="input-div">
      <StyledLabel for="location">Edit Location: </StyledLabel>
      <input type="text" placeholder="Edit Location" name="location" ref={locationInput} value={userlocation} onChange={(e) => setLocation(e.target.value)} />
      </div>

      
      <div className="input-div">
      <StyledLabel for="number">Edit Number: </StyledLabel>
      <input type="number" placeholder="Edit Number" name="number" ref={numberInput} value={usernumber} onChange={(e) => setNumber(e.target.value)} />
      </div>
      
      <div className="input-div">
      <StyledLabel for="desc">Add Description: </StyledLabel>
      <input type="text" placeholder="Edit Description" name="desc" ref={descInput} value={description} onChange={(e) => setDesc(e.target.value)} />
      </div>

      <div className="input-div">
      <StyledLabel for="myfile">Add Image: </StyledLabel>
      <input type="file" id="myfile" name="myfile" accept="image/*" ref={filevalue} onChange={handleChange} />
      { errorMessage !=""
 ? <p className="error-msg" ref={errDiv}>{errorMessage}</p> : null}
      </div>
      
        
        
      {isFetching ?  <button>Loading...</button> :  <button type="submit">Update Details</button>}
      
        </form>
      
        </div>
      )
    }
 
</div>  )
}

export default UpdateDetails
