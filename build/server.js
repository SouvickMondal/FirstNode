var express = require('express');
var open = require('open');
var path = require('path');
var app = express();
var port = 3000;
import webpack from 'webpack';
import config from '../webpack.config.dev.js';
app.get('/',function(req,res)
{
    res.sendFile(path.join(__dirname,'../src/index.html'));
});


app.listen(port,function(err) 
{
    if(err)
    {
        console.log(err);
    }
    else{
        open('http://localhost:'+port);
    }
});