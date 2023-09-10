import asyncHandler from 'express-async-handler';

// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async(req, res) => {
    /*res.status(401);
    throw new Error('Something wrong');*/
    res.status(200).json({message: 'Auth User' });
});


// @desc   Register a new user 
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async(req, res) => {
    res.status(200).json({message: 'Register User' });
});


// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
const logoutUser = asyncHandler(async(req, res) => {
    res.status(200).json({message: 'Log out User' });
});


// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'User Profile' });
});


// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Update User Profile' });
});


export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
};