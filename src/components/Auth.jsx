import React, {useState} from 'react';
import Register from './Register';
import '../Auth.css';
import SignIn from './SignIn';


export default function Auth() {


    const [page, setPage] = useState(0)
    const[data, setData] = useState(null)
    const titles = ["sign in", "register"]
    const [formData, setFormData] = useState({
        email:"",
        password: "",
        userName:""
    })

   const createUser = async() => {
   const response = await fetch('url', {method:'POST', body:JSON.stringify(formData)})
   const data = await response.json()
        setData(data)
   }
    const PageDisplay =()=>{
        if (page === 0) {
            return <SignIn formData={formData} setFormData={setFormData}/>;
    }else if(page === 1){
        return <Register formData={formData} setFormData={setFormData}/>;
    }
}

  return (
   
        <div className ="auth">
        <div className='form-container'>
            <div className='header'>
              <h1 className='auth-h1'>{titles[page]}</h1></div>
            <div className='body'>
                {PageDisplay()}
            </div>
            <div className='footer'>
            <button
            className='button-13'
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            className='button-13'
            onClick={() => {
              if (page === titles.length - 1) {
                createUser();
                
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === titles.length - 1 ? "Submit" : "Next"}
          </button>
            </div>
        </div>

        </div> 
    
  )
  }