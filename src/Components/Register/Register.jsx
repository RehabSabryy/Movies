import Joi from 'joi';
import React, { useState , useEffect} from 'react';
import { Helmet } from 'react-helmet';

export default function Register() {
    const [errorList, setErrorList] = useState([]);
    const [error, setError] = useState('');
    const [isLoading , setIsLoading] = useState(false);
    const [user, setUser] = useState(
        {first_name: '' , last_name: '' , age: 0 , email: '', password: ''}
    );
    function getUser(eventInfo) {
        let myUser = {...user};
        myUser[eventInfo.target.name]=eventInfo.target.value; 
        setUser(myUser);  
        console.log(myUser);
     } 
     useEffect(() => {
        localStorage.setItem('user' , JSON.stringify(user));
     })
     function validateRegisterForm () {
        let schema = Joi.object({
            first_name: Joi.string().min(3).max(10).required(),
            last_name: Joi.string().min(3).max(10).required(),
            age: Joi.number().min(16).max(80).required(),
            email: Joi.string().email({minDomainSegments: 2 ,tlds: {allow: ['com', 'net']}}).required(),
            password: Joi.string().required()
        })
        console.log(schema.validate(user , {abortEarly: false}));
        return schema.validate(user , {abortEarly: false});
     }
     
     function submitRegisterForm(e) {
        e.preventDefault();
        setIsLoading(true);
       const validation = validateRegisterForm();
       if(validation.error) {
            setIsLoading(false);
            setErrorList(validation.error.details);
       
       }
       else {
        setTimeout(() => {
        setIsLoading(false);
        // redirect to home page
        window.location.href = '/';
       }, 2000);
       }
   
     }
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Register</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    <form onSubmit={submitRegisterForm} className="mx-auto my-5">
            <h1 className="text-center">Register</h1>
        <div>
            <label htmlFor="first_name">First Name</label>
            <input onChange={getUser} type="text" name="first_name" id="first_name" className="form-control my-inputs my-2" />
            {errorList.filter((err)=>err.context.label==='first_name')[0]?.message?<div className="alert alert-danger"> {errorList.filter((err)=>err.context.label==='first_name')[0]?.message}</div> : '' }
        </div> 
        <div>
            <label htmlFor="last_name">Last Name</label>
            <input onChange={getUser} type="text" name="last_name" id="last_name" className="form-control my-inputs my-2" />
            {errorList.filter((err)=>err.context.label==='last_name')[0]?.message?<div className="alert alert-danger">
                {errorList.filter((err)=>err.context.label==='last_name')[0]?.message} 
            </div> : ''}
            
        </div> 
        <div>
            <label htmlFor="age">Age</label>
            <input onChange={getUser} type="number" name="age" id="age" className="form-control my-inputs my-2" />
            {errorList.filter((err)=>err.context.label==='age')[0]?.message? <div className="alert alert-danger">
                {errorList.filter((err)=>err.context.label==='age')[0]?.message}
            </div> : ''}
        </div>
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
            {isLoading==true ? <i className='fas fa-spinner fa-spin'></i> : 'Register'}
        </button>
        {error.length>0 ?<div className="alert alert-danger my-2">{error}</div> : ''}
        
    </form>
    </>
  )
}
