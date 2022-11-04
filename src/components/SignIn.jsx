import React from 'react'

export default function 
({formData, setFormData}) {
  return (
    <div className='register-container'>
        <input placeholder='username..' type="text" value={formData.username} onChange={(e)=>{setFormData({...formData, username: e.target.value})}}></input>
        <input placeholder='password..' type="password" value={formData.password} onChange={(e)=>setFormData({...formData, password: e.target.value})}></input>
    </div>
  )
}
