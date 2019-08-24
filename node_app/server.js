'use strict';

const express = require('express');

// Constants
const PORT = 8440;
const HOST = 'localhost';

// App
try{
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
}
catch(err){
    console.log(err.message);
}