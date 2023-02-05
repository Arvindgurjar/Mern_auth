const express = require('express');
const cookieParser = require("cookie-parser");
const app = express();
const jwt = require("jsonwebtoken")
app.use(cookieParser());
const  registration = require("../model/mernproj")
const authenticate = async(req,res,next)=>{
    try{ 
       const token = req.headers?.cookie;
       const list = token.split("=")
       const token1=list[1];
       //console.log(token1)
       const varify = jwt.verify(token1,process.env.SECRET_KEY);
      // console.log(varify)
       const rootuser = await  registration.findOne({_id:varify._id,"tokens.token":token1})
      // console.log(rootuser)
        if(!rootuser)
        {
            throw new Error("User not found");
        }
        req.token = token;
        req.rootuser=rootuser;
        req.userID=rootuser._id;

        next();
    }
    catch(err){res.status(401).send("unauthenticate token provided")}

}

module.exports = authenticate;