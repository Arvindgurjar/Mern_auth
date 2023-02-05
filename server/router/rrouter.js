
var bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
require("../db/connection");
const registration = require("../model/mernproj");
const authenticate = require("../middleware/authenticate")
router.post("/register", async(req, res) => {
    const { name, email, mobile, profession, password, cpassword } = req.body
    if (!name || !email || !mobile || !profession || !password || !cpassword) {
        return res.status(422).json({message:"missing details"})
    }
    else if(!(password === cpassword)) 
    {
        return res.status(400).json({message:"Password Not match"})
    }
    try {
        
        const useremail = await registration.findOne({ email: email });
        if (useremail) {
            return res.status(422).json({message:"already register"})
        }
        const user = new registration({ name, email, mobile, profession, password, cpassword });
       /*  const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password,salt);*/
        await user.save(); 
        //console.log(result);
       return res.status(201).json({message:"successful"})
    }
    catch (err) {
        res.status(404).json({message:(err)});
    }

})
router.post("/login", async (req, res) =>{
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ message: "plz fill the data" })
        }
        const userEmail = await registration.findOne({$and:[{ email: email },{cpassword:password}]})
        //const result = await bcrypt.compare(password,userEmail.password)
        
        if (userEmail)
            {   const token = await userEmail.generateAutoToken();
                res.cookie("jwtoken",token,{
                    expires:new Date(Date.now() + 25892000000),
                    httpOnly:true
                });
                
                //console.log(token)
                return res.status(201).json({message:"Login succesful"});
            }
            else
            {
                res.status(400).json({message:"Invalid data"})
            }

    }
    catch (err) {
        res.status(400).json({message:"Failed"});
    }
})
router.get("/about",authenticate,(req,res)=>{
      res.send(req.rootuser);
})
router.get("/Home",authenticate,(req,res)=>{
    res.send(req.rootuser);
})
router.get("/Logout",(req,res)=>{
    req.res.clearCookie("jwtoken");
   res.status(200).send("User Logout");
})
module.exports = router;