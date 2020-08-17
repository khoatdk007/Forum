const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config();

const databaseURL = process.env.DB_URL;

router.use(express.urlencoded({extended: true}));
router.use(express.json());

router.get('/', (req, res) => {
  res.render('pages/new_post.ejs');
});

router.post('/', (req, res) => {
  const newPostData = req.body;
  if (!newPostData.title || !newPostData.content || !newPostData.tags || !newPostData.fullname || !newPostData.nickname) {
    return res.render('pages/new_post', {
      msg: 'Please fill in all fields !',
      title: newPostData.title,
      tags: newPostData.tags,
      content: newPostData.content,
      fullname: newPostData.fullname,
      nickname: newPostData.nickname
    });
  }
  newPostData.time = new Date().toUTCString();
  newPostData.author = {
    fullname: newPostData.fullname,
    nickname: newPostData.nickname
  };
  delete newPostData.fullname;
  delete newPostData.nickname;
  newPostData.replies = [];
  MongoClient.connect(databaseURL, {useUnifiedTopology: true}, (err, client) => {
    if (err) throw err;
    const dbo = client.db();
    dbo.collection('posts').insertOne(newPostData, (err, result) => {
      if (err) throw err;
      res.redirect('/post/' + result.ops[0]._id);
      client.close();
    });
  });
});

module.exports = router;