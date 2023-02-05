import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const Navigate = useNavigate()
  const [user,setuser] = useState({});
  const callAbout = async () => {
    try {
      const res = await fetch("/Home", {
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
    <div>
      <div className="home text-center" >
        <div>
          <p style={{ fontWeight: "bold", fontFamily: "monospace", color: "green" }}>WelCome</p>
          <h4 style={{ fontFamily: "inherit", marginTop: "-250px" }}>{user.name}</h4>
        </div>
      </div>
    </div>

  )
}

export default Home
