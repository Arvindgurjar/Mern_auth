import React, { useState } from 'react'
import Rimg from "../images/2.jpg"
import {NavLink,useNavigate} from "react-router-dom"
import { FcPortraitMode, FcPhoneAndroid, FcVoicemail, FcList } from "react-icons/fc";
import { MdPassword } from "react-icons/md";
import { CgPassword } from "react-icons/cg";
import { useForm } from "react-hook-form";


const Signup = () => {
  const Navigate = useNavigate();
  const { register,handleSubmit, formState: { errors } } = useForm();
    const [user,setuser] = useState({
      name:"",email:"",mobile:"",profession:"",password:"",cpassword:""
    })
    let name,value;
    const Change = (e) =>{
     // console.log(e)
          name=e.target.name;
          value=e.target.value
         setuser({...user,[name]:value});
    }
  const submit = async (e) =>{
    const {name,email,mobile,profession,password,cpassword}=user;
         const res = await fetch("/register",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify({
            name,email,mobile,profession,password,cpassword
          })
         });
        // const data = await res.json();
                 //console.log(res.status);
         if(!res || res.status===422 ||res.status===400||res.status===404)
         {
          window.alert("Registration failed");
          //console.log("failled")

         }
         else
         { //console.log(data.status)
          window.alert("Registration Success");
          Navigate("/login")
         } 
}
/* const Submit = (e) =>{

} */
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="maincol col-lg-8 mx-auto my-5">
            <h2 className='text-center'>Sign Up</h2>
            <div className="row">
              <div className="col-12 col-lg-6">
                <img src={Rimg} alt="" style={{borderRadius:"2%"}} height={"90%"} width={"100%"} />
                </div>
              <div className="col-10 col-md-8 col-lg-6 mx-auto">
                <form className="my-5" method='POST' onSubmit={handleSubmit(submit)}>
                  <div className="inputfield">
                    <FcPortraitMode /><input type="text" className='ms-2 my-1' autoComplete='off' name='name'  value={user.name} placeholder='Enter Name' {...register("name", {
                      required:'This is Required',
                      minLength:{
                        value:5,
                        message:"minimum 5 charactor required"
                      }
                       })} onChange={Change} />
                  </div>
                  {errors.name && (<div className='text-danger' style={{fontSize:"10px",fontWeight:"bold",marginBottom:"-15px"}}>{errors.name.message}</div>)}
                  <div className="inputfield">
                    <FcVoicemail /><input type="text" className='ms-2 my-1'  autoComplete='off'  name="email" value={user.email} placeholder='Enter Email'{...register("email", {
                      required:'This is Required',
                      pattern:{
                        value: /\S+@\S+\.\S+/,
                        message:"Invalid Email"
                      }
                       })} onChange={Change} />
                  </div>
                  {errors.email && (<div className='text-danger' style={{fontSize:"10px",fontWeight:"bold",marginBottom:"-15px"}}>{errors.email.message}</div>)}

                  <div className="inputfield">
                    <FcPhoneAndroid /><input type="text" className='ms-2 my-1' autoComplete='off'  name="mobile" value={user.mobile} placeholder='Enter Mobile Number'{...register("mobile", {
                      required:'This is Required',
                      minLength:{
                        value:10,
                        message:"too short"
                      },
                      maxLength:{
                        value:10,
                        message:"too long"
                      },
                      pattern:{
                        value: /^\d+$/,
                        message:"Invalid number"
                      }
                       })} onChange={Change}/>
                  </div>
                  {errors.mobile && (<div className='text-danger' style={{fontSize:"10px",fontWeight:"bold",marginBottom:"-15px"}}>{errors.mobile.message}</div>)}
                  <div className="inputfield">
                    <FcList /><input type="text" className='ms-2 my-1'  autoComplete='off' onChange={Change} name="profession" value={user.profession} placeholder='Enter Profession' />
                  </div>
                  <div className="inputfield">
                    <MdPassword /><input type="password"  className='ms-2 my-1' autoComplete='off' name="password" value={user.password} placeholder='Enter Password' {...register("password", {
                      required: 'This is Required',
                      pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                        message: "Invalid password"
                      }
                    })} onChange={Change} />
                  </div>
                   {errors.password && (<div className='text-danger' style={{fontSize:"10px",fontWeight:"bold",marginBottom:"-15px"}}>{errors.password.message}</div>)} 
                  <div className="inputfield">
                    <CgPassword /><input type="password" className='ms-2 my-1' name="cpassword"  autoComplete='off' value={user.cpassword} placeholder='Enter Conform Password'  {...register("cpassword", {
                      required: 'This is Required',
                      pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                        message: "Invalid password"
                      }
                    })} onChange={Change} />
                  </div>
                  {errors.cpassword && (<div className='text-danger' style={{fontSize:"10px",fontWeight:"bold",marginBottom:"-15px"}}>{errors.cpassword.message}</div>)}

                  <div>
                    <button type="submit" className='btn btn-primary mt-4'>Register</button><br/>
                    <div style={{marginTop:"10px",fontSize:"10px",fontWeight:"bold"}} className="text-center "><NavLink to="/login" className="text-decoration-none text-dark">Already Register</NavLink></div>
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

export default Signup
