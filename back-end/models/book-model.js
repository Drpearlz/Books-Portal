const sequelize = require('../configurations/config');
const Sequelize = require('sequelize');

const Book = sequelize.define('Book', {
    ID: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV1, primaryKey: true},
    image: { type: Sequelize.STRING, allowNull: false },
    contact: {type: Sequelize.STRING, allowNull: false},
    phone: {type: Sequelize.STRING, allowNull: false},
    email: {type: Sequelize.STRING, allowNull: false},
    abstract: {type: Sequelize.STRING, allowNull: false},
    author: { type: Sequelize.STRING, allowNull: false },
    title: { type: Sequelize.STRING, allowNull: false},
    publish_date: { type: Sequelize.STRING},
    borrowedBy: {type: Sequelize.STRING, defaultValue: null},
    category: { type: Sequelize.STRING , allowNull: false },
    status: {type: Sequelize.STRING, defaultValue: 'available'}
    

}, {freezeTableName: true});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//   const MongoClient = require('mongodb').MongoClient;
//   const uri = "mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority";
//   const client = new MongoClient(uri, { useNewUrlParser: true });
//   client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
//   });
  
//   const doc = {name: "John Smith", age: 30};
//   collection.insertOne(doc, (err, result) => {
//     console.log("Inserted document:", result.ops[0]);
//   });

//   const cursor = collection.find({name: "John Smith"});
// cursor.toArray((err, documents) => {
//   console.log("Found documents:", documents);
// });


module.exports = Book;
