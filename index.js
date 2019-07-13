// implement your API here
const express = require('express');
const db = require('./data/db');

const server = express();
server.use(express.json());


server.get('/', (req, res) => {
    res.send('Hello Web20 node edition')
});

server.get('/users', (req, res) =>{
    db.find()
    .then(db =>{
        res.status(200).json(db)
    })
    .catch(err =>{
        res.status(500).json(err)
    })
});

server.post('/users', (req, res) =>{
    const data = req.body;
    db.insert(data)
    .then(user =>{
        res.status(204).json(user)
    })
    .catch(err =>{
        res.status(500).json(err)
    })
});

const port = 5000;

server.listen(port, () => console.log('Yes I am on port 5000') );