import React from 'react'

export default function Profile() {
 const user = JSON.parse(localStorage.getItem('user'));
    return (
    <>
    <div className='container '>
    <div className='row'>
    <div className='col-md-6 my-5'>
    <h1 className='text-center  fw-bold '>Profile</h1>
    </div>
    <div className='col-md-6 my-5 p-5 fs-4'>
    <p><b>Name :</b> {user.first_name + " " + user.last_name }</p>
    <p><b>Email : </b>{user.email}</p>
    </div>
    </div>
    </div>
    </>
  )
}
