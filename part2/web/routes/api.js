var express = require('express');
var router = express.Router();

router.get('/user/:id', function(req, res){
    const obj ={
        id: id,
        name: 'John',
        age: 30,
        job: 'developer',
        city: 'New York'
    };
    res.json(obj);
});

module.exports = router;