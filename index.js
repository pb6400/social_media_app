const express=require('express');
const app=express();
const port=8000;

// use express router
app.use('/',require('./routes'));


app.listen(8000,function(err){
    if(err){
        console.log('Error:',err);
    }
    console.log('server is running on port :',port);
});