const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Algo_Bot_algosAPI', {useNewUrlParser: true});
app.use(express.static(__dirname+'/public/dist/public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require('./server/routes/routes')(app);

app.listen(8000, () => {
    console.log("Listening on port 8000");
});
