const express = require('express');
// CommonJS
const app = express();
const foo = 'jdjdj';

app.get('/', (req, res) => {
  res.send({ hello: 'world' });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);


// ➜  server git:(master) heroku create
// Creating app... done, ⬢ sheltered-oasis-11786
// https://sheltered-oasis-11786.herokuapp.com/ | https://git.heroku.com/sheltered-oasis-11786.git
// 
// git push heroku master
// heroku open
// heroku logs
// 
// 
