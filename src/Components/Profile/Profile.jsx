import React from 'react'
import { Helmet } from 'react-helmet';
export default function Profile() {
 const user = JSON.parse(localStorage.getItem('user'));
    return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Profile</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 my-5'>
            <h1 className=' fw-bold'>Profile</h1>
            <div className='profile-info mt-5'>
    <p><b>Name :</b> {user.first_name + " " + user.last_name }</p>
    <p><b>Email : </b>{user.email}</p>
    </div>
          </div>
        </div>
      </div>
    </>
  )
}
