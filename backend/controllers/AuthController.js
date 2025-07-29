const User = require("../models/UserModel.js");
const { createSecretToken } = require("../util/secretToken.js");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email }); //🔹 Database (MongoDB) me check karte hain ki yeh email already registered user ke paas hai ya nahi.
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
   //   Agar email nahi mila DB me, toh error bhejte hain: "Email or password incorrect".
    } 
    //User ke entered password ko compare karte hain database me stored hashed password ke saath (bcrypt se).
  // Agar match karta hai, to auth = true.
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     res.status(201).json({ message: "User logged in successfully", success: true, user});
     next()
  } catch (error) {
    console.error(error);
  }
}

module.exports.logout = async (req, res) => {
  try {
      return res.status(200).cookie("token", "", { maxAge: 0 }).json({
          message: "Successfully logged out",
          success: true
      })
  } catch (error) {
      console.log(error)
  }
}


