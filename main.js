const express = require('express');
const app = express();
const path = require('path');
const expressEjsLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const coreNewsRoute = require('./routes/coreNewsRoute');

const PORT = process.env.PORT || 5000;

// MiddleWARES
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({ extended : true}));


//Routers Middleware
app.use('/', coreNewsRoute);
app.use('/articles', coreNewsRoute);




app.listen(PORT, () => {
    console.log(`Server is Listening on Port ${PORT}........`)
} )