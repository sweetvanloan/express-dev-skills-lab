module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
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

function deleteOne(id) {
    skills.splice(id, 1);
}

function create(skill) {
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
    return skills[id];
}