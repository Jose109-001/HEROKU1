const { User } = require('../models');

const userData = [{
        username: 'Jason',
        password: '12345'
    },
    {
        username: 'Francis',
        password: '123456'
    },
    {
        username: 'Joseph',
        password: '1234567'
    },
    {
        username: 'David',
        password: '12345678'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;