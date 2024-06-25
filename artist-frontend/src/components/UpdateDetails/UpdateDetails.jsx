import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { faEyeSlash, faEye, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './UpdateDetails.css'
import styled from 'styled-components';
import { userSelector, updateUser, clearState } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const StyledLabel = styled.label`
       color: #E0A96D;
       font-weight: bold;
    `;

const UpdateDetails = () => {
    let link = "http://localhost:3000/updatedetails";
   
    const dispatch = useDispatch();
    const { isFetching, isSuccess, isError, errorMsg } = useSelector(
        userSelector
     );
    const errDiv = useRef();

    const [success, setSuccess] = useState(false);
    const [file, setFile] = useState();
    const [desc, setDesc] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();

      setDesc("");
      setFile();

      let data = {desc, file};
       dispatch(updateUser(data));
    }


    const handleChange = (e) => {
        setFile(e.target.files[0]);
    }

   

  return (
    <div className="register-form-container">
    {
      success ? (<div className="form-container">
              <div className="success-div">
                 <h3>Success!</h3>
                <FontAwesomeIcon icon={faCircleCheck} />
                <Link to='/updatedetails' className="success-link">Back To Profile</Link>
              </div>
              <p  ref={errDiv}></p>
      </div> ) : (
           
           <div className="form-container">
           <h3>Update Your Details</h3>
      
        <form  className="register-form" onSubmit={handleSubmit}>
      
      <div className="input-div">
      <StyledLabel for="desc">Add Description: </StyledLabel>
    <textarea id="desc" name="desc" rows="4" cols="50" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
      </div>

      <div className="input-div">
      <StyledLabel for="desc">Add Image: </StyledLabel>
      <input type="file" id="myfile" name="myfile" accept="image/*"  onChange={handleChange}/>
      </div>
          
       <button type="submit">Update Details</button>
        </form>
      
        </div>
      )
    }
 
</div>  )
}

export default UpdateDetails
