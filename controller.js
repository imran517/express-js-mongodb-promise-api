
const Service = require('./service');

function getTasks (req, res) {
    let tasks = new Service().getTasks()
    .then(result => {
        return res.json(result);
    })
    .catch (error => { 
        return res.json(error);
    });
}

function getTask (req, res) {
    let task = new Service().getTask(req.params.id)
    .then(result => {
        return res.json(result);
    })
    .catch (error => { 
        return res.json(error);
    });
}

function addTask(req, res) {
    let task = new Service().addTask(req.body)
    .then(result => {
        return res.json(result);
    })
    .catch (error => { 
        return res.json(error);
    });
}

function updateTask(req, res) {
    let task = new Service().updateTask(req.body)
    .then(result => {
        return res.json(result);
    })
    .catch (error => { 
        return res.json(error);
    });
}

function deleteTask(req, res) {
    let task = new Service().deleteTask(req.body)
    .then(result => {
        return res.json(result);
    })
    .catch (error => { 
        return res.json(error);
    });
}

module.exports =  { getTasks, getTask, addTask, updateTask, deleteTask }