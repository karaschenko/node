//CRUD

const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectId();
console.log(id.id);
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log(error);
  }
  const db = client.db(databaseName);

  db.collection('tasks').insertOne({
    _id: id,
    description: 'something that i dont know',
    completed: true,
  }, (error, result) => {
    if(error) {
      return console.log('unable')
    }
    console.log(result.ops);

  });
});

