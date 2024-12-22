import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";


// Route for user login
const loginUser = async (req,res) => {


}

//  Route for user register
const registerUser = async (req,res) => {
    try {
        
        const {name, email, password} = req.body;

        // checking user already exist or not
        const exists = await userModel.findOne({email});
        if (exists) {
            return res.json({success:false, message:"User already exists"})
        }

        // validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({success:false, message:"Please enter a valid email"})
        }
        if (password.length < 8) {
            return res.json({success:false, message:"Please enter a strong password"})
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword 

    } catch (error) {
        
    }
} 

// Route for admin login
const adminLogin = async (req,res) => {


}

export { loginUser, registerUser, adminLogin }