import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Signin from './components/Signin';
import Signup from './components/Signup';
import About from './components/About';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Error from "./components/Error";
import Logout from "./components/Logout";
import { createContext, useReducer } from "react";
import { initialstate,reducer } from "./Reducer/useReducer";
export const UserContext = createContext();

const App = () => {

 const [state, dispatch] = useReducer(reducer, initialstate)
  return (<>
  <UserContext.Provider value={{state,dispatch}}>
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Signin/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/Logout" element={<Logout/>}/>
        <Route path="*" element={<Error/>}/>
      </Route>
    </Routes>
    </UserContext.Provider>
  </>);

}

export default App
//export {UserContext}
