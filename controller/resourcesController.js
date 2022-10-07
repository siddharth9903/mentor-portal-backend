const resources = require('../models/resourcesModel')

const addresources = async (req,res,next) => {
    
    let id = req.params;

    try {
        const { name, providerId, provider, tags, pdfLink } = req.body
        let newresource = new resources();
        newresource.name = name
        newresource.providerId = provider
        newresource.provider = provider
        newresource.tags = tags
        newresource.pdfLink = pdfLink
        
        newresource.save();

        res.status(200).json({
            succes: true,
            message:"Resources added succefully"
        })
    }
    catch (err)
    {
        console.log("Error while adding new resources : ", err);
        res.status(400).json({
            succes: false,
            message:"Resources is not added"
        })
    }
}
const getAllresources = async (req,res,next) => {
    
    let myresources;
    try {
        myresources = resources.find();
    }
    catch (err)
    {
        console.log("Error while fetching all resources : ", err);
        res.status(400).json({
            success: false,
            message:"Can not get resources"
        })
    }
    if (!myresources)
    {
        res.status(404).json({
            success: false,
            message:"Resources can not be found"
        })
    }
    res.status(200).json({
        success: true,
        myresources
    })

}

const getResourcesByMentorId = async (req, res, next) => {
    
    let id = req.params;
    let myresources;
    try {
        myresources=resources.find({providerId:id})
    }
    catch (err)
    {
        console.log("Error while fetching resources by :", err);
        res.status(400).json({
            success: false,
            message:"Resources are not avaiable"
        })
    }
    if (!myresources)
    {
        res.status(404).json({
            success: false,
            message:"Resources can not be found"
        })
    }
    res.status(200).json({
        success: true,
        myresources
    })
}

module.exports = { addresources, getAllresources, getResourcesByMentorId };