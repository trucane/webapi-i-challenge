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
        res.status(201).json(user)
    })
    .catch(err =>{
        res.status(500).json(err)
    })
});

server.delete('/users/:id', (req, res) =>{
    const id = req.params.id;
    db.remove(id)
    .then(item =>{
        if(item){
            res.status(204).end()
        }else{
            res.status(404).json({message: "cant find the item to delete"})
        }
    })
    .catch(err =>{
        res.status(500).json(err)
    })
})

server.get('/user/:id', (req, res) =>{
    const id = req.params.id;

    db.findById(id)
    .then(user =>{
        if(user){
            res.status(200).json(user);
        }else{
            res.status(404).json({message:"cant find user"})
        }
    })
});

server.put('/users/:id', (req, res) =>{
    const id = req.params.id;
    const data = req.body;
    db.update(id, data)
    .then(updated =>{
        if(updated){
            res.status(200).json(updated);
        }else{
            res.status(404).json({message:"cant find user to update"})
        }
    })
    .catch(err =>{
        res.status(500).json(err)
    })
});

const port = 5000;

server.listen(port, () => console.log('Yes I am on port 5000') );