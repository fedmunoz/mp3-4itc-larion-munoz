import React, {useState} from 'react';
import './Forms.css';
// import {registerForm, loginForm} from './Transition';
//icons are credited to riajulislam from flaticon.com
import linkedin from './assets/linkedin.png';
import facebook from './assets/facebook.png';
import twitter from './assets/twitter.png';
// import blobs from './assets/blobs.png';

function FormContainer() {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })
    
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);
    
    const handleFirstNameChange = (e) => {
        setValues({...values, firstName: e.target.value});
    }
    
    const handleLastNameChange = (e) => {
        setValues({...values, lastName: e.target.value});
    }
    
    const handleEmailChange = (e) => {
        setValues({...values, email: e.target.value});
    }

    const handlePasswordChange = (e) => {
        setValues({...values, password: e.target.value});
    }

    const handleSubmitChange1 = (e) => {
        e.preventDefault();
        if (values.email && values.password) {
          setValid(true);
        }
        setSubmitted(true);
    }

    const handleSubmitChange2 = (e) => {
        e.preventDefault();
        if (values.firstName && values.lastName && values.email && values.password) {
          setValid(true);
        }
        setSubmitted(true);
    }

    return (
      <div class="hero">
          <div class="bgImage"></div>
          <div class="form-box">
                <div class="button-box">
                    <div id="btn"></div>
                    <button id="loginBtn" type="button" class="toggle-btn">Login</button>
                    <button id="registerBtn" type="button" class="toggle-btn">Register</button>
                </div>
                {/* <div class="social-icons">
                    <img src={linkedin} alt="logo"></img>
                    <img src={facebook} alt="logo"></img>
                    <img src={twitter} alt="logo"></img>
                </div> */}
                <form id="login" class="input-group" onSubmit={handleSubmitChange1}>
                    <input 
                    id="email"
                    class="form-field"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChange={handleEmailChange}
                    disabled={valid}>
                    </input>
                    {submitted && !values.email ? (
                    <span id="error">Please enter email.</span>
                    ) : null}

                    <input 
                    id="password"
                    class="form-field"
                    type="text"
                    placeholder="Password"
                    name="email"
                    value={values.email}
                    onChange={handlePasswordChange}
                    disabled={valid}>
                    </input>
                    {submitted && !values.email ? (
                    <span id="error">Please enter password.</span>
                    ) : null}

                    <div class="checkbox-row">
                        <input
                        id="remember"
                        class="check-box"
                        type="checkbox">
                        </input>
                        <span>Remember Me</span>
                    </div>
                    <button class="submit-btn" type="submit" >Login</button>
                </form>

                <form id="register" class="input-group" onSubmit={handleSubmitChange2}>
                <input 
                    id="first-name"
                    class="form-field"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleFirstNameChange}
                    disabled={valid}>
                    </input>
                    {submitted && !values.firstName ? (
                    <span id="error">Please enter first name.</span>
                    ) : null}

                    <input 
                    id="last-name"
                    class="form-field"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleLastNameChange}
                    disabled={valid}>
                    </input>
                    {submitted && !values.lastName ? (
                    <span id="error">Please enter last name.</span>
                    ) : null}

                    <input 
                    id="email"
                    class="form-field"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChange={handleEmailChange}
                    disabled={valid}>
                    </input>
                    {submitted && !values.email ? (
                    <span id="error">Please enter email.</span>
                    ) : null}

                    <input 
                    id="password"
                    class="form-field"
                    type="text"
                    placeholder="Password"
                    name="email"
                    value={values.email}
                    onChange={handlePasswordChange}
                    disabled={valid}>
                    </input>
                    {submitted && !values.email ? (
                    <span id="error">Please enter password.</span>
                    ) : null}

                    <div class="checkbox-row">
                        <input
                        id="remember"
                        class="check-box"
                        type="checkbox">
                        </input>
                        <span>I agree to the <i>terms and conditions.</i></span>
                    </div>

                    <button class="submit-btn" type="submit" >Register</button>
                </form>
            </div>
      </div>
    );
  }
  
export default FormContainer;