const cookieParser = require('cookie-parser');
const env = require('./config/environment')
const express=require('express');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');
const db = require('./config/mongoose');
require('dotenv').config({path: __dirname + '/.env'})
//used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const passportJWT = require('./config/passport-jwt-strategy');
const passportGoogle = require('./config/passport-google-oauth2-strategy');
const MongoStore = require('connect-mongo') ;
const flash = require('connect-flash');
const customMware = require('./config/middleware');


const chatServer = require('http').Server(app);
const chatSockets = require('./config/chat_sockets').chatSockets(chatServer);
const path = require('path');
app.use
app.use(express.urlencoded({extended:true}));

app.use(cookieParser());

app.use(express.static(env.asset_path));
// mkae the uploads path availiable to  browser
app.use('/uploads', express.static(__dirname + '/uploads'));

app.use(expressLayouts);

// extract style and scripts from sub pages to layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


// set up the view engine
app.set('view engine','ejs');
app.set('views','./views');


// mongo store is used to store the session cookie in the db
app.use(session({
    name: 'codeial',
    // todo change the secret  before deployment in production mode
    secret: env.session_cookie_key,
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    }, 
    store: MongoStore.create({
         mongoUrl:'mongodb://127.0.0.1:27017/codeial_development',
        autoRemove: 'disabled'
     } )   
         
    
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(customMware.setFlash);

// use express router
app.use('/',require('./routes'));


app.listen(8000,function(err){
    if(err){
        console.log('Error:',err);
    }
    console.log('server is running on port :',port);
});