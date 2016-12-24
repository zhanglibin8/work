var express = require('express');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var app =express();
var users =[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(function (req, res, next) {
    res.setHeader('Content-Type','text/html;charset=utf8');
    next();
});
app.set('view engine','ejs');
app.set('views',path.resolve('views'));
app.get('/signup', function (req, res) {
    res.render('signup',{title:'注册'});
});
app.post('/signup', function (req, res) {
    users.push(req.body);
    res.redirect('/signin');
});
app.get('/signin', function (req, res) {
    res.render('signin',{title:'登录'});
});
app.post('/signin', function (req, res) {
    if(req.body.username == users[0].username &&req.body.password ==users[0].password){
        res.redirect('/welcome');
    }else{
        res.redirect('/signin');
    }
});
app.get('/welcome', function (req, res) {
    res.render('welcome',{title:'欢迎'})
});

app.listen(8080);