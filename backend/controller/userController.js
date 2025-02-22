import jwt from "jsonwebtoken"
import userModel from "../models/userModel.js"
import bcryptjs from "bcryptjs"
import validator from "validator"



const createToken = (id)=>{
    return jwt.sign({id} , process.env.JWT_SECRET )
}


const loginUser = async (req , res)=>{
    try {
        const {email , password} = req.body
        const user = await userModel.findOne({email})
        if(!user){
            return res.json({success:false , message:"User doesn't exists"})
        }
        const isMatch = await bcryptjs.compare(password , user.password)
        if(isMatch){
            const token = createToken(user._id)
            res.json({success:true , token})
        }else{
            res.json({success:false , message:"Invalid Credentials"})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false , message:error.message})
        
    }
    

}

const registerUser = async (req, res)=>{

    try {
        const {name , email , password} = req.body;
        const exists = await userModel.findOne({email})
        if(exists){
            return res.json({success:false , message:"User already exists"})
        }
        if(!validator.isEmail(email)){
            return res.json({success:false , message:"Enter valid email"})
        }
        if(password.length < 8){
            return res.json({success:false , message:"Enter strong password"})
        }
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password , salt);

        const newUser =  new userModel({
            name , email , password:hashedPassword
        })

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success:true , token})
    } catch (error) {
        console.log(error)
        res.json({success:false , message:error.message})
        
    }
    
}

const adminLogin = async (req ,res)=>{
    try {
        const {email , password} = req.body
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password , process.env.JWT_SECRET)
            res.json({success:true , token})
        }else{
            res.json({success:false , message:"Invalid Credentials"})
        }

    } catch (error) {
        console.log(error)
        res.json({success:false , message:error.message})
        
    }

}

export {loginUser , registerUser , adminLogin}