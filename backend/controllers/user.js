const userModel = require('../models/user');

exports.register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const user = await userModel.create({
            name,
            email,
            password
        });
        // const token = user.getSignedJwtToken();
        res.status(200).json({success: true});
    } catch (error) {
       res.status(400).json({success: false,error : error.message});
    }
}

exports.login = async (req, res, next) => {
    try {
        const {email, password } = req.body;
       
        //  validate email password
        if (!email || !password) {
           return res.status(400).json({success :false,error : "Please provide an email and password"})
        }
        
        //  Check for user
        const user = await userModel.findOne({ email }).select("+password");

        if (!user) {
            return res.status(401).json({success :false,error : "Invalid credentials"})
        }

        // Check if password matches
        const isMatch = await user.matchPassword(password);

        if (!isMatch) {
            return res.status(401).json({success :false,error : "Invalid credentials"})
        }

        const token = user.getSignedJwtToken();
        res.status(200).json({success: true, token});
    } catch (error) {
       res.status(400).json({success: false,error : error.message});
    }
}