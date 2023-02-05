import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

 const About = () => {
  const Navigate = useNavigate()
  const [user,setuser] = useState({});
  const callAbout = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Contect-Type": "application/json"
        },
        credentials: "include"
      });
      const data = await res.json();
      //console.log(data);
      setuser(data);
      if (!res.status === 200) {
        throw new Error(res.err)
      }
    }
    catch (err) {
      console.log(err)
      Navigate("/login")
    }
  }
  useEffect(() => {
    callAbout()
  }, []) 
  return (
    <>
      <div className="container about">
        <form method="GET">
          <div className="row">
            <div className="col-10 col-md-8 mx-auto">
              <div className="row my-5">
                <div className="col-6 col-md-4">
                  <h6>{user.name}</h6>
                  <p>{user.profession}</p>
                  <p>Ranking:1/10</p>
                </div>
                <div className="col-6 col-md-4 ms-md-auto">
                  <button className='btn btn-info my-auto'>Edit Profile</button>
                </div>
              </div>


              <div className="row">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">About</button>
                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Timeline</button>
                  </div>
                </nav>
                <div className="col-8 mx-auto">
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                      <div className="my-3 d-flex mx-5">
                        <h6>User ID</h6><span className='ms-auto'>{user._id}</span>
                      </div>
                      <div className="my-3 d-flex mx-5">
                        <h6>Name</h6><span className='ms-auto'>{user.name}</span>
                      </div>
                      <div className="my-3 d-flex mx-5">
                        <h6>Gmail</h6><span className='ms-auto'>{user.email}</span>
                      </div>
                      <div className="my-3 d-flex mx-5">
                        <h6>Phone</h6><span className='ms-auto'>{user.mobile}</span>
                      </div>
                      <div className="my-3 d-flex mx-5">
                        <h6>Profession</h6><span className='ms-auto'>{user.profession}</span>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                      <div className="my-3 d-flex mx-5">
                        <h6>Experience</h6><span className='ms-auto'>intermediate</span>
                      </div>
                      <div className="my-3 d-flex mx-5">
                        <h6>Hourly Rate</h6><span className='ms-auto'>intermediate</span>
                      </div>
                      <div className="my-3 d-flex mx-5">
                        <h6>Total Project</h6><span className='ms-auto'>intermediate</span>
                      </div>
                      <div className="my-3 d-flex mx-5">
                        <h6>English Level</h6><span className='ms-auto'>intermediate</span>
                      </div>
                      <div className="my-3 d-flex mx-5">
                        <h6>Availability</h6><span className='ms-auto'>intermediate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>





            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default About
