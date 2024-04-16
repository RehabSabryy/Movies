import React, { useEffect } from 'react'
import { useState } from 'react';
import Joi from 'joi';
import { Helmet } from 'react-helmet';

export default function Login() {
  const [errorList, setErrorList] = useState([]);
  const [error, setError] = useState('');
  const [isLoading , setIsLoading] = useState(false);
  const [user, setUser] = useState(
      {email: '', password: ''}
  );
  useEffect(() => {
    let storedUser = localStorage.getItem('user');
    if(storedUser) {
      setUser(JSON.parse(storedUser));
    } 
  },[])
  function getUser(eventInfo) {
      let myUser = {...user};
      myUser[eventInfo.target.name]=eventInfo.target.value; 
      setUser(myUser);  
      console.log(myUser);
   } 

   function validateLoginForm () {
      let schema = Joi.object({
          email: Joi.string().email({minDomainSegments: 2 ,tlds: {allow: ['com', 'net']}}).required(),
          password: Joi.string().required()
      })
      const {email,password} = user;
      return schema.validate({email,password}, {abortEarly: false});
    }
   
   function submitLoginForm(e) {
      e.preventDefault();
      setIsLoading(true);
     const validation = validateLoginForm();
     if(validation.error) {
          setIsLoading(false);
          setErrorList(validation.error.details);
     
     }
     else {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if(storedUser.email === user.email && storedUser.password === user.password) {
      
      setTimeout(() => {
      setIsLoading(false);
      // redirect to home page
      window.location.href = '/';
     }, 2000);
     } }
 
   }
return (
  <>
    <Helmet>
        <meta charSet='utf-8' />
        <title>Login</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
  <form onSubmit={submitLoginForm} className="mx-auto my-5">
          <h1 className="text-center">Login</h1>
      <div>
          <label htmlFor="email">Email </label>
          <input onChange={getUser} type="email" name="email" id="email" className="form-control my-inputs my-2" />
          
          {errorList.filter((err)=>err.context.label==='email')[0]?.message?<div className="alert alert-danger">
              {errorList.filter((err)=>err.context.label==='email')[0]?.message}
          </div> : ''}
      </div>
      <div>
          <label htmlFor="password">Password</label>
          <input onChange={getUser} type="password" name="password" id="password" className="form-control my-inputs my-2" />
          {errorList.filter((err)=>err.context.label==='password')[0]?.message? <div className="alert alert-danger">
              {errorList.filter((err)=>err.context.label==='password')[0]?.message}
          </div> : ''}
      </div>
      <button className='btn btn-info my-2' type="submit">
          {isLoading==true ? <i className='fas fa-spinner fa-spin'></i> : 'Login'}
      </button>
      {error.length>0 ?<div className="alert alert-danger my-2">{error}</div> : ''}
      
  </form>
  </>
)
}
