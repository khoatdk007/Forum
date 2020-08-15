const express = require('express');
const route = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config();

const databaseURL = process.env.DB_URL;

route.use(express.urlencoded({extended: true}));
route.use(express.json());

route.get('/', (req, res) => {
  res.render('pages/new_post.ejs');
});

route.post('/', (req, res) => {
  const newPostData = req.body;
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

module.exports = route;