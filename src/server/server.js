const express = require('express');
require('dotenv').config();
const port = process.env.PORT;

// Import des routes
const AuthRouterClass = require('./Auth/auth.routes');

const mongoose = require('mongoose');

// URL de connexion à la bdd mLab
const dbuser = "heroku_mtg2zcqg";
const dbpassword = "q5i5o8l930ks54jbhekbmrtsrq";
const urlmongo = "mongodb://" + dbuser + ":" + dbpassword + "@ds119734.mlab.com:19734/heroku_mtg2zcqg";

// Connexion entre l'API et la BDD
mongoose.connect(urlmongo, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur lors de la connexion'));
db.once('open', function() {
    console.log('Connexion à la BDD OK.');
})

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const authRouter = new AuthRouterClass();

app.use('/api/auth', authRouter.init());

app.listen(port, () => {
    console.log(`Listen on http://localhost:${port}`);
})