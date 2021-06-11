const { Post } = require('../models');

const postData = [{
        title: "Fear of Job Insecurity",
        content: "The fear of job loss refers to the felt threat, stress, and perceived powerlessness due to the possibility of leaving the current job and being not hired in the labor marke.",
        user_id: 1

    },
    {
        title: "So much to learn!",
        content: "My top tips for learning, staying motivated, and achieving your goals?",
        user_id: 2
    },
    {
        title: "Why does the world keep changing?",
        content: "Our restless Earth is always changing. Tectonic plates drift, the crust quakes, and volcanoes erupt. Air pressure falls, storms form, and precipitation results. Learn how these powerful forces shape our air, land, water, and weather—and constantly transform our planet.",
        user_id: 3
    },
    {
        title: "What causes people to change?",
        content: "People change because either they chose to or they are forced to. They may also change due to a life-changing event. Or people change because they grow and evolve throughout their life. In addition to that boredom, inspiration or frustration might also lead to a change in someone's behavior.",
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;