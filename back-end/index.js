const sequelize = require('./configurations/config');
require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path'); 
const books_router = require('./routes/books');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

sequelize.sync().then((result)=>{}).catch((err)=>{console.log(err);});


app.get('/', function(req,res) {
   res.sendFile(path.join('/Users/drpearlz/5/Books-Portal/Book Portal/front-end/src/index.html'));
    });



app.use('/books', books_router);


const PORT = 8000;
app.listen(PORT, ()=>{console.log('the server is on');})