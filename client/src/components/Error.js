import React from 'react'
import Video from "../images/vedio.mp4"
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const Navigate = useNavigate();
    const Goback = ()=>{
       
        Navigate(-1);
    }

    return (
        <div style={{background:"black",height:"83vh",position:"relative"}}>
            <div className="container-fluid" style={{position:"absolute"}}>
                <div className="row my-5">
                    <div className="col-5 mx-auto">
                        <video width="100%" height="100%" autoplay="true" loop="true" muted>
                            <source src={Video} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5 col-md-2 mx-auto">
                        <button onClick={Goback} className='btn btn-light' style={{fontWeight:"bold"}}>Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error
