const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.use( function (req, res)  {
  res.status(404);
  res.end("Page not Found");
});

app.listen(process.env.PORT || 3000);