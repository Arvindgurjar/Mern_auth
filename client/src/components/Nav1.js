import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../App';
 const Nav1 = () =>{
    const {state,dispatch} = useContext(UserContext)
    if(state)
    {
        return (<>
             <ul className="navbar-nav ms-lg-auto mb-2 mb-lg-0" style={{marginLeft:"50%"}}>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Logout">Logout</NavLink>
                        </li>
                    </ul>
                
        </>)
    }
    else
    {
        return (<>
        <ul className="navbar-nav ms-lg-auto mb-2 mb-lg-0" style={{marginLeft:"50%"}}>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                         <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>

                      <li className="nav-item">
                            <NavLink className="nav-link" to="/register">Register</NavLink>
                        </li>
                        
                    </ul>
                
        </>)
    }
}
export default Nav1;