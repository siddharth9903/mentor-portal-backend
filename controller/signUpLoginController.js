const express = require('express')

const User = require('../models/UserModel');


const signUp = async (req, res, next) => {

    const { name, email, mobile, password } = req.body;

    console.log("mentor signup...");

    try {
        let userExist = await User.findOne({ email: email })
    
        if (userExist)
        {
            res.json({
                success: false,
                msg:"User already Exist"
            })
        }
        else {
            let newUser = new User();
            newUser.name=name
            newUser.email=email
            newUser.moblie=mobile
            newUser.password=password
            
            await newUser.save();
    
        }
    }
    catch (err)
    {
        console.log("Error in mentor signUp: ",err);
    }

    
}

// const menteeSighUp = async (req, res, next)=> {
//     const { name, email, mobile, password, langauge, intersts} = req.body;

//     console.log("mentee signup...");

//     try {
//         let userExist = await Mentormodel.findOne({ email: email })
    
//         if (userExist)
//         {
//             res.json({
//                 success: false,
//                 msg:"User already Exist"
//             })
//         }
//         else {
//             let newUser = new Mentormodel();
//             newUser.name=name
//             newUser.email=email
//             newUser.moblie=mobile
//             newUser.password=password
//             newUser.langauge=langauge
//             newUser.intersts=intersts
            
//             await newUser.save();
    
//         }
//     }
//     catch (err)
//     {
//         console.log("Error in mentee signUp: ",err);
//     }

// }

// const LoginMentor

module.exports ={signUp};