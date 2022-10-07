const { STATES } = require("mongoose");
const mentor = require('../models/mentorModel')

const getAllMentors = async(req,res,next) => {
    
    let users;
    try {
        users = await mentor.find();
    }
    catch (err)
    {
        return res.status(400).json({
            success: false,
            response: {
                message:err.message
            }
        })
    }
    if (!users)
    {
        return res.status(404).json({
            success: false,
            response: {
                message:"User Not Found"
            }
        })
    }
    return res.status(200).json({success:true,users})
}

const getMentorById = async (req, res, next) => {
    
    const id = req.params
    const userId = id
    let user;
    try {
        user = await mentor.find({ _id: userId })
    }
    catch (err)
    {
        res.status(400).json({
            success: false,
            message:err
        })
    }
    if (!user)
    {
        res.status(400).json({
            success: false,
            message:"User not Exist"
        })
    }
    return res.status(200).json({ success: true, user });
}

const addMentorwithId = async () => {
    
    let newmentor=new mentor();
    try {
        let id = req.params;
        const { name, photo, followes, langauge, experience, industry,domain, tools, district, state, intro } = req.body;
        newmentor._id = id;
        newmentor.name = name;
        newmentor.photo = photo
        newmentor.followes = followes
        newmentor.langauge = langauge;
        newmentor.experience = experience;
        newmentor.industry = industry;
        newmentor.domain=domain
        newmentor.tools = tools
        newmentor.district = district;
        newmentor.state = state
        newmentor.intro = intro
        
        newmentor.save();
        res.status(200).json({
            success: true,
            message:"Mentor Addaed"
        })
    }
    catch (err)
    {
        console.log("Error while adding new mentor : ", err);
        res.status(400).json({
            success: false,
            message:"Mentor can not be added"
        })
    }

}

module.exports={getAllMentors,getMentorById,addMentorwithId};
