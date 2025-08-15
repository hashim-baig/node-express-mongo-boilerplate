const User = require('../models/User');
const logger = require('../config/logger');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        logger.info('Fetched all users');
        res.json(users);
    } catch (error) {
        logger.error('Error fetching users:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        logger.info(`Created user: ${user.email}`);
        res.status(201).json(user);
    } catch (error) {
        logger.error('Error creating user:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
