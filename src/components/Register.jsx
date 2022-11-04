import React from 'react'

export default function Register({formData, setFormData}) {
  return (
    <div className="register-container">

      <input className="reg-input"  placeholder='username..' type="text" value={formData.username} 
      onChange={(e)=>setFormData({...formData, username: e.target})}></input>

      <input className="reg-input"  placeholder='email..' type="text" value={formData.email} 
      onChange={(e)=>setFormData({...formData, email: e.target})}></input>

      <input className="reg-input"  placeholder='password..' type="password" value={formData.password} 
      onChange={(e)=>setFormData({...formData, password: e.target})}></input>
    
    </div>
  )
}
