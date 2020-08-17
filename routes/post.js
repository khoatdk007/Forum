const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const express = require('express');
const route = express.Router();
require('dotenv').config();

const databaseURL = process.env.DB_URL;

route.use(express.urlencoded({
  extended: true
}));
route.use(express.json());

route.get('/:postId', (req, res) => {
  const postId = req.params.postId;
  if (postId.length < 12) return res.render('pages/page_not_found');
  const postObjectId = new ObjectId(postId);
  MongoClient.connect(databaseURL, {
    useUnifiedTopology: true
  }, (err, client) => {
    if (err) throw err;
    const dbo = client.db();
    dbo.collection('posts').find({
      _id: postObjectId
    }).toArray((err, result) => {
      if (err) throw err;
      if (result.length === 0) {
        return res.render('pages/page_not_found');
      }
      const postData = result[0];
      res.render('pages/post', {
        post: postData,
      });
      client.close();
    });
  });

});

route.post('/:postId', (req, res) => {
  const postId = req.params.postId;
  const postObjectId = new ObjectId(postId);
  const newReply = req.body;
  newReply.time = new Date().toUTCString();
  newReply.user = {
    fullname: newReply.fullname,
    nickname: newReply.nickname
  };
  delete newReply.fullname;
  delete newReply.nickname;
  let changedReplies = [];
  MongoClient.connect(databaseURL, { useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;
    const dbo = client.db();
    dbo.collection('posts').find({ _id: postObjectId }).toArray((err, result) => {
      if (err) throw err;
      const result_data = result[0];
      if (!newReply.fullname || !newReply.nickname || !newReply.content)
      {
        return;
      }
      changedReplies = result_data.replies;
      changedReplies.push(newReply);
      dbo.collection('posts').updateOne({ _id: postObjectId }, { $set: {replies: changedReplies } }, (err, result) => {
        if (err) throw err;
        client.close();
      });
    });
  });
  res.redirect('/post/' + postId);
});

module.exports = route;