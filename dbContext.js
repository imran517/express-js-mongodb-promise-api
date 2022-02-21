const { MongoClient } = require("mongodb");
const config = require('./config');

const connectionString = `mongodb://${config.db.host}:${config.db.port}`;
const mongoClient = new MongoClient(connectionString);

module.exports = {
    connect: function () {
      return new Promise ((resolve, reject) => {
        mongoClient.connect()
        .then (client => { 
          console.log("Successfully connected to MongoDB.");
          resolve(client.db("taskdb"))
        })
        .catch (error => { 
          console.error(`Fatal error occurred: ${error}`);
          reject(error);
        });
      });
    }
  };