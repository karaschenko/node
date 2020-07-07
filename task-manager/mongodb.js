//CRUD

const {MongoClient, ObjectId} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
  if (error) {
    return console.log(error);
  }
  const db = client.db(databaseName);

  db.collection('users').updateOne({
    _id: new ObjectId("5eb96b7f0a540b28262d7488")
  }, {
    $inc: {
      age: 23,
    }
  }).then((result) => {
    console.log(result)
  }).catch((er) => {
    console.log(er);
  })
});

