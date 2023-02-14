Create Node.js application
Open terminal/console, then create a folder for our application:

$ mkdir nodejs-express-mysql
$ cd nodejs-express-mysql
Initialize the Node.js application with a package.json file:

npm init

name: (nodejs-express-mysql) 
version: (1.0.0) 
description: Node.js Restful CRUD API with Node.js, Express and MySQL
entry point: (index.js) server.js
test command: 
git repository: 
keywords: nodejs, express, mysql, restapi
author: bezkoder
license: (ISC)

Is this ok? (yes) yes
Next, we need to install necessary modules: express, mysql and cors.
Run the command:

npm install express mysql cors --save

npm install -g nodemon -dev



