import User from "../model/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import { genToken, genToken1 } from "../config/token.js";


//This is SignUp or Registration code 

export const Registration = async (req,res) => {
  try {
    const { name, email, password } = req.body;
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Enter Valid Email" });
    }
    if (password.length < 8) {
      return res.status(400).json({ message: "Enter a Strong Password" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashPassword });

    const token = await genToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(201).json(user)
  } catch (error) {
    console.log("Registration Error")
    return res.status(500).json({message:`Registration error${error}`})
  }
};

//This is logIn code 


export const login = async(req,res)=>{
try {
  
  const {email,password} = req.body
    
  const user = await User.findOne({email})
  if(!user){
   return res.status(400).json({message:"User is not found"})
  }
  const isMatch = await bcrypt.compare(password,user.password)
  if(!isMatch){
     return res.status(400).json({message:"InCorrect Password"})
  }
   const token = await genToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(201).json({message:"User is loggedIn"})
} catch (error) {
  console.log("login Error")
    return res.status(500).json({message:`login error${error}`})
}
  }


  //This is logOut code 

  export const logOut = async(req,res)=>{
         try {
          res.clearCookie("token")
           return res.status(200).json({message:"logOut Successful"})
         } catch (error) {
          console.log("logOut Error")
                return res.status(500).json({message:`logOut error${error}`})
         }
  }



  export const googleLogin = async (req, res) => {
  try {
    const { name, email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
      });
    }

    const token = await genToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "User is loggedIn",
    });

  } catch (error) {
    console.log("googleLogin Error:", error);

    return res.status(500).json({
      message: `googleLogin error: ${error.message}`,
    });
  }
};


export const adminLogin = async(req,res)=>{
  try {
    const{email,password} = req.body
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
        const token = await genToken1(email);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 1 * 24 * 60 * 60 * 1000,
    })
    return res.status(200).json(token)
    }
          return res.status(200).json({
      message: "Invalid Credientials",
    });    
  } catch (error) {
     console.log("Admin Error:", error);

    return res.status(500).json({
      message: `adminLogin error: ${error.message}`,
    });
    
  }

}