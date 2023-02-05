import React, { useContext, useState } from 'react'
import Rimg from "../images/2.jpg"
import { NavLink,useNavigate } from "react-router-dom"
import {FcVoicemail } from "react-icons/fc";
import { MdPassword } from "react-icons/md";
import { useForm } from "react-hook-form";
import { UserContext } from '../App';

const Signin = () => {
  const {state,dispatch} = useContext(UserContext)
  const Navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [email,setemail] = useState("");
  const [password,setpassword]= useState("")
  const Login = async(e) => {
    e.preventDefault();
    const res = await fetch("/login",{
      method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify({
           email,password
    })
    })

   // console.log(res.status);
    if(res.status===201)
    { dispatch({type:"USER",payload:true})
      window.alert("login success");
       Navigate("/");
    }
    else
    {
      window.alert("login Failed")
    }
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="maincol col-lg-8 mx-auto my-5">
            <h2 className='text-center'>Sign In</h2>
            <div className="row">
              <div className="col-12 col-lg-6">
                <img src={Rimg} alt="" style={{ borderRadius: "2%" }} height={"90%"} width={"100%"} />
              </div>
              <div className="col-10 col-md-8 col-lg-6 mx-auto">
                <form className="my-5" action="/register" method='POST' onSubmit={handleSubmit()}>
                  <div className="inputfield">
                    <FcVoicemail /><input type="text" className='ms-2 my-1'name="email" value={email} autoComplete='off' placeholder='Enter Email'{...register("email", {
                      required: 'This is Required',
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Invalid Email"
                      }
                    })} onChange={(e)=>setemail(e.target.value)} />
                  </div>
                  {errors.email && (<div className='text-danger' style={{ fontSize: "10px", fontWeight: "bold" }}>{errors.email.message}</div>)}


                  <div className="inputfield">
                    <MdPassword /><input type="password" className='ms-2 my-1' autoComplete='off' name="password" value={password} placeholder='Enter Password' onChange={(e)=>setpassword(e.target.value)}/>
                  </div>

                  <div>
                    <button type="submit" className='btn btn-primary mt-4' onClick={Login}>Log in</button><br />
                    <div style={{ marginTop: "10px", fontSize: "10px", fontWeight: "bold" }} className="text-center "><NavLink to="/register" className="text-decoration-none text-dark">Register</NavLink></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin

