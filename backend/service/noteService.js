// noteService.js
const Note = require('../module/notesModel');
// export user controller


const createUser = async function (req, res) {
    // Logic to create user
     try {
    const note = await Note.create(req.body);
    res.status(201).json({message: "User note data created", data: note});
     }
    catch (error) {
        res.status(500).json({message: "Error creating user note data", error: error.message});
    }     
    
}


const getUser = async function (req, res) {
    // Logic to get user
    try {
    const note = await Note.find();
    res.status(200).json({message: "User note data fetched", data: note});
    
    } catch (error) {
        res.status(500).json({message: "Error fetching user note data", error: error.message});
    }
}


const getspecificUser = async function (req, res) {
    // Logic to get specific user
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({message: "User note not found"});
        }
        res.status(200).json({message: "User note data fetched", data: note});
    } catch (error) {
        res.status(500).json({message: "Error fetching user note data", error: error.message});
    }
}

exports.getUser = getUser;
exports.createUser = createUser;    
exports.getspecificUser = getspecificUser;