const userAuthModel = require('../models/userAuth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const tokenBlacklistModel = require("../models/tokenBlacklistModel")
const emailService = require("../services/emailService")

async function register(req, res) {
    const { name, email, password } = req.body;

    const isUserexists = await userAuthModel.findOne({ email });

    if (isUserexists) {
        return res.status(400).json({ message: "user already exists" });
    }

    const hash = await bcrypt.hash(password, 10);

    const newUser = new userAuthModel({
        name,
        email,
        password: hash
    });

    await newUser.save();

    const token = jwt.sign(
        { id: newUser._id },
        process.env.JWT_SECRET_KEY
    );

    res.cookie("token", token);

    res.status(201).json({
        message: "user successfuly registered",
        isUserexists:newUser
    });

    await emailService.sendRegistrationEmail(newUser.email, newUser.name);
}

async function login(req,res)
{
    const {email,password} = req.body;

    const user = await userAuthModel.findOne({email});
    
    if(!user)
    {
        return res.status(400).json({
            message : "user not exist please register"
        })
    }

    const validpassword = await bcrypt.compare(password , user.password);

    if(!validpassword)
    {
        return res.status(400).json({
            message : "email or password incorrect"
        })
    }

    const token = jwt.sign({
        id : user._id,
    },process.env.JWT_SECRET_KEY);

    res.cookie("token",token);

    res.status(201).json({
        message : "successfully logined",
        user,
        token
    })

}

async function logout(req,res)
{
     const token = req.cookies.token;
     if(token)
     {
        await tokenBlacklistModel.create({token})
     }
 
     res.clearCookie("token")
     res.status(200).json({
        message:"Logout Successfull"
     })
}

module.exports = { register,login,logout };