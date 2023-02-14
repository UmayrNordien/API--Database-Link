// MySQL connection via clever cloud

/* Configure & Connect to MySQL database
We’re gonna have a separate folder for configuration. 
Let’s create config folder in the app folder, under application root folder, 
then create db.config.js file inside that config folder with content like this: */
// example db

require('dotenv').config();

module.exports = {
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB
  };