import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App';

const Logout = () => {
    const {state,dispatch} = useContext(UserContext);
    const Navigate = useNavigate();  
    useEffect(()=>{
        fetch("/Logout",{
            method:"GET",
            headers:{
                "Context-Type":"application/json"
            },
            credentials:"include"
        }).then((res)=>{
               dispatch({type:"USER",payload:false})
               Navigate("/login")
               if(!res.status===200){
                throw new Error("something went erong")
               }
        }).catch((err)=>{
            console.log(err);
            
        })
    })

  return (
    <div>
      <h1>Hello from logout</h1>
    </div>
  )
}

export default Logout
