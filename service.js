const model = require('./model');
const dbContext = require('./dbContext');

class Service {
    constructor () {
        this.service = "Service";
        this.method = "";
     }

    getTasks () {  
        this.method = "getTasks";   
        return new Promise ((resolve, reject) => {
            dbContext.connect()
            .then(db => {
                return db.collection('tasks').find({}).toArray()
            })  
            .then ( result => { 
                let serviceResult  = { status:"success", message: "Tasks retrieved.",service: this.service, method: this.method, data: result };
                console.log(serviceResult); 
                resolve(serviceResult); 
            })
            .catch (error => { 
                let serviceResult  = { status: "failure", message: error, service: this.service, method: this.method, data: null};
                console.error(serviceResult);
                reject(serviceResult);
            });
        });                
    }

    getTask (id) {
        this.method = "getTask"; 
        return new Promise ((resolve, reject) => {
            dbContext.connect()
            .then(db => {
                return db.collection('tasks').findOne({id: id})
            })  
            .then ( result => { 
                let serviceResult  = { status:"success", message: "Task retrieved.", service: this.service, method: this.method, data: result };
                console.log(serviceResult); 
                resolve(serviceResult); 
            })
            .catch (error => { 
                let serviceResult  = { status: "failure", message: error, service: this.service, method: this.method, data: null};
                console.error(serviceResult);
                reject(serviceResult);
            });
        });  
    }

    addTask (task) {
        this.method = "addTask"; 
        return new Promise ((resolve, reject) => {
            dbContext.connect()
            .then(db => {
                return db.collection('tasks').insertOne(task)
            })  
            .then (result => { 
                let serviceResult  = { status:"success", message: "Task added.", service: this.service, method: this.method, data: result };
                console.log(serviceResult);
                resolve(serviceResult); 
            })
            .catch (error => { 
                let serviceResult  = { status: "failure", message: error, service: this.service, method: this.method, data: null};
                console.error(serviceResult);
                reject(serviceResult);
            });
        });
    }

    updateTask (task) {
        this.method = "updateTask";
        return new Promise ((resolve, reject) => {
            dbContext.connect()
            .then(db => {
                return db.collection('tasks').updateOne({id: task.id }, { $set: task})
            })  
            .then (result => { 
                let serviceResult  = { status:"success", message: "Task updated.", service: this.service, method: this.method, data: result };
                console.log(serviceResult);
                resolve(serviceResult); 
            })
            .catch (error => { 
                let serviceResult  = { status: "failure", message: error, service: this.service, method: this.method, data: null};
                console.error(serviceResult);
                reject(serviceResult);
            });
        });
    }
    
    deleteTask (task) {
        this.method = "deleteTask";
        return new Promise ((resolve, reject) => {
            dbContext.connect()
            .then(db => {
                return db.collection('tasks').deleteOne(task)
            })  
            .then (result => { 
                let serviceResult  = { status:"success", message: "Task deleted.", service: this.service, method: this.method, data: result };
                console.log(serviceResult);
                resolve(serviceResult); 
            })
            .catch (error => { 
                let serviceResult  = { status: "failure", message: error, service: this.service, method: this.method, data: null};
                console.error(serviceResult);
                reject(serviceResult);
            });
        });
    }
}

module.exports = Service;
