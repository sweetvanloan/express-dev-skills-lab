module.exports = {
    getAll,
    getOne
};

const skills = [{
        text: "HTML",
        done: true
    },
    {
        text: "CSS",
        done: true
    },
    {
        text: "JavaScript",
        done: false
    },
    {
        text: "Python",
        done: false
    },
    {
        text: "JQuery",
        done: true
    },
    {
        text: "Node.js",
        done: false
    },
    {
        text: "Express",
        done: false
    }
];

function getAll(id) {
    return skills;
}

function getOne(id) {
    return skills[id];
}