const model = require('./model');
const dbContext = require('./dbContext');

class Service {
    constructor () { }

    getTasks () {     
        return new Promise ((resolve, reject) => {
            dbContext.connect()
            .then(db => {
                return db.collection('tasks').find({}).toArray()
            })  
            .then ( result => { 
                console.log(result); 
                resolve(result); 
            })
            .catch (err => { 
                console.error(`Error fetching tasks!: ${err}`);
                reject(err);
            });
        });                
    }

    getTask (id, callback) {
        return new Promise ((resolve, reject) => {
            dbContext.connect()
            .then(db => {
                return db.collection('tasks').findOne({id: id})
            })  
            .then ( result => { 
                console.log(result); 
                resolve(result); 
            })
            .catch (err => { 
                console.error(`Error fetching a task: ${err}`);
                reject(err);
            });
        });  
    }

    addTask (task, callback) {
        return new Promise ((resolve, reject) => {
            dbContext.connect()
            .then(db => {
                return db.collection('tasks').insertOne(task)
            })  
            .then (result => { 
                let msg = { message: "Success adding a task!" }
                console.log(msg);
                resolve(msg); 
            })
            .catch (err => { 
                console.error(`Error adding a task!: ${err}`);
                reject(err);
            });
        });
    }

    updateTask (task, callback) {
        return new Promise ((resolve, reject) => {
            dbContext.connect()
            .then(db => {
                return db.collection('tasks').updateOne({id: task.id }, { $set: task})
            })  
            .then (result => { 
                let msg = { message: "Success updating a task!" }
                console.log(msg);
                resolve(msg); 
            })
            .catch (err => { 
                console.error(`Error updating a task!: ${err}`);
                reject(err);
            });
        });
    }
    
    deleteTask (task, callback) {
        return new Promise ((resolve, reject) => {
            dbContext.connect()
            .then(db => {
                return db.collection('tasks').deleteOne(task)
            })  
            .then (result => { 
                let msg = { message: "Success deleting a task!" }
                console.log(msg);
                resolve(msg); 
            })
            .catch (err => { 
                console.error(`Error deleting a task!: ${err}`);
                reject(err);
            });
        });
    }
}

module.exports = Service;
