const express = require('express');
const app = express();
app.get('/', function (req,res){
    res.cookie('name','Sarthak');
    res.send('Done');
})
app.listen(8080);