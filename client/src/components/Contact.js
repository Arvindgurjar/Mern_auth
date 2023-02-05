import React from 'react'
import { useForm } from 'react-hook-form'

const Contact = () => {
  const {register,reset,handleSubmit,formState: { errors }} = useForm();
  const onSubmit = () =>{
    reset();
}
  return (
    <div>
      <div className="container">
        <div className="row my-5">
          <div className="col-10 col-md-4 col-lg-3 maincol mx-auto">
            <h6 className='mt-2' style={{ fontSize: "15px" }}>Phone</h6>
            <p style={{ fontSize: "10px", marginTop: "-8px" }}>+91 8972673891</p>
          </div>
          <div className="my-2 my-md-0 col-10 col-md-4 col-lg-3 maincol mx-auto">
            <h6 className='mt-2' style={{ fontSize: "15px" }}>Email</h6>
            <p style={{ fontSize: "10px", marginTop: "-8px" }}>+91 8972673891</p>
          </div>
          <div className="col-10 col-md-4 col-lg-3 maincol mx-auto">
            <h6 className='mt-2' style={{ fontSize: "15px" }}>Address</h6>
            <p style={{ fontSize: "10px", marginTop: "-8px" }}>+91 8972673891</p>
          </div>
        </div>
      </div>


      <form action="/message" method='POST' onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <div className="row my-3">
            <div className="col-10 col-lg-8 maincol mx-auto">
              <h5 className='mt-3'>Get in Touch</h5>
              <div className="row my-2">
                <div className="col-10  mx-auto">
                  <div className="row mt-3">
                    <div className="col-10 col-md-3 mx-auto">
                      <input type="text" placeholder='Your Name' disabled />
                    </div>
                    <div className="col-10 col-md-3 mx-auto">
                      <input type="text" placeholder='Your Email' disabled />
                    </div>
                    <div className="col-10 col-md-3 mx-auto">
                      <input type="text" placeholder='Your Phone Number' disabled />
                    </div>
                  </div>
                  <div className="row my-5">
                    <div className="col-12">
                      <textarea name="message" id=""  rows="5" placeholder='Message' {...register("message", {
                      required:'This is Required',
                       })} />
              
                  {errors.message && (<div className='text-danger' style={{fontSize:"10px",fontWeight:"bold",marginBottom:"-15px"}}>{errors.message.message}</div>)}
                    </div>
                  </div>
                  <button type="submit" className='btn btn-primary' style={{ fontWeight: "bold" }}>Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </form>
    </div>
  )
}

export default Contact
