var express = require('express');
var router = express.Router();

router.get('/user/:id', function(req, res, next) {
  const id = req.params.id;
  const user = { id, name: 'kenu' };
  res.json({ title: 'Get', user });
});

router.post('/user', function(req, res, next) {
  const id = req.body.id;
  const name = req.body.name;
  const user = { id, name };
  res.json({ title: 'Post', user });
});

router.put('/user', function(req, res, next) {
  const id = req.body.id;
  const name = req.body.name;
  const user = { id, name };
  res.json({ title: 'Put', user });
});

router.delete('/user', function(req, res, next) {
  const id = req.body.id;
  res.json({ title: 'Delete', result: 'deleted' });
});

var formidable = require('formidable');

router.post('/upload', function(req, res, next) {
  console.log(__dirname);
  const form = formidable({
    uploadDir: __dirname + '/../uploads/',
    filename: Date.now(),
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    res.json({ fields, files });
  });
});

module.exports = router;
