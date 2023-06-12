const User = require('../models/user');

const userData = [
    {
        username: 'wentworth',
        email: 'wentworth@email.com',
        password: 'aaaaaa',
    },
    
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;