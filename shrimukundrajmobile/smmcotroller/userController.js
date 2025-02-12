const UserAdmin = require('../models/userModel');
const mongoose = require('mongoose');

// Get all users
const getUser = async (req, res) => {
    try {
        const users = await UserAdmin.find({}).sort({ createdAt: -1 });

        if (!users || users.length === 0) {
            return res.status(400).json({ error: "No users found" });
        }

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};




// Update a user by ID
const updateUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid ObjectId' });
    }

    try {
        const updatedUser = await UserAdmin.findByIdAndUpdate(
            id,
            {
                email: req.body.email,
                mobilenumber: req.body.mobilenumber,
                name: req.body.name,
                password: req.body.password
            },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: "Server error", message: error.message });
    }
};

module.exports = { updateUser, getUser };
