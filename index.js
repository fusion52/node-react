const express = require('express');
// CommonJS
const app = express();
const foo = 'jdjdj';

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);
