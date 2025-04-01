const express = require('express');

const middleware = (app) =>{
    app.use(express.json());
    app.use(express.static('public'));

    app.use(express.urlencoded({extended: true}));
    app.use('/uploads', express.static('public/uploads'));
}