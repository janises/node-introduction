const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      port = 3000,
      bc = require('./controllers/books_controller.js'),
      baseURL = "/api/books";

    app.use(bodyParser.json());
    app.use(express.static( __dirname + '/../public/build'));

    app.listen(port, ()=>{
          console.log(`Listening on port ${port}`)
    });

    app.post(baseURL, bc.create);

    app.get(baseURL, bc.read);

    app.put(`${baseURL}/:id`, bc.update);

    app.delete(`${baseURL}/:id`, bc.delete);