
const Service = require('./service');

function getTasks (req, res) {
    let tasks = new Service().getTasks()
    .then(result => {
        return res.json(result);
    })
    .catch (err => { 
        console.error(`Fatal error occurred: ${err}`)
    });
}

function getTask (req, res) {
    let task = new Service().getTask(req.params.id)
    .then(result => {
        return res.json(result);
    })
    .catch (err => { 
        console.error(`Fatal error occurred: ${err}`)
    });
}

function addTask(req, res) {
    let task = new Service().addTask(req.body)
    .then(result => {
        return res.json(result);
    })
    .catch (err => { 
        console.error(`Fatal error occurred: ${err}`)
    });
}

function updateTask(req, res) {
    let task = new Service().updateTask(req.body)
    .then(result => {
        return res.json(result);
    })
    .catch (err => { 
        console.error(`Fatal error occurred: ${err}`)
    });
}

function deleteTask(req, res) {
    let task = new Service().deleteTask(req.body)
    .then(result => {
        return res.json(result);
    })
    .catch (err => { 
        console.error(`Fatal error occurred: ${err}`)
    });
}

module.exports =  { getTasks, getTask, addTask, updateTask, deleteTask }