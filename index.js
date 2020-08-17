const path = require('path');
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const databaseURL = process.env.DB_URL;
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const pageNum = req.query.page ? req.query.page : 1;
  MongoClient.connect(databaseURL, {useUnifiedTopology: true}, (err, client) => {
    if (err) throw err;
    const dbo = client.db();
    dbo.collection('posts').find({}).sort({_id: -1}).toArray((err, result) => {
      if (err) throw err;
      if ((pageNum - 1) * 5 > result.length) return res.render('pages/page_not_found');
      const data = result.slice((pageNum - 1) * 5, pageNum * 5);
      const pageLimit = Math.ceil(result.length / 5);
      res.render('pages/index', {posts: data, page: pageNum, pageLimit: pageLimit});
    });
  });
});

app.use('/new-post', require('./routes/new_post'));

app.use('/post', require('./routes/post'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {res.render('pages/page_not_found')});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on http://127.0.0.1:${PORT}`));
