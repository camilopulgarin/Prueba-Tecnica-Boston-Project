const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/mevn-database')
    .then(db => console.log('DB conectada'))
    .catch(err => console.error(err));

//Setings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/tasks', require('./routes/task'));
app.use('/api/cars', require('./routes/cars'));
//Static files
app.use(express.static(__dirname+'/public'));
//Server is listening
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});