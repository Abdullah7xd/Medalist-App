const express = require('express');
const app = express();
const port = 5000;
app.get('/',(req,res) => {res.send('working Perfectly')});
app.listen(port,() =>{console.log('server is being started');});
