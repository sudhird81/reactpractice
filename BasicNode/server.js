require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const db  = require('./db'); 
const app = express();
const profile = require('./controllers/user.controller');

app.use(express.json()); 
app.use(bodyParser.json());
 
app.use(bodyParser.urlencoded({
    extended: true
}));
 
app.use(cors());
 

 
// Handling Errors
app.use((err, req, res, next) => {
    // console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});
 
app.listen(process.env.PORT,() => console.log('Server is running on port 3001'));


/**
 * @swagger
 * /:
 *  get:
 *    summary: This api is used to check if get method is working or not
 *    description: This api is used to check if get method is working or not
 *    responses:
 *    200:
 *      description: To test get method
 * 
 */
app.get("/", (req, res) => {

  res.json({ message: "Welcome to nodejs expressjs integration ." });
});

// const swaggerOptions = {
//   swaggerDefinition: {
//       openapi: '3.0.1',
//       info: {
//           version:'1.0.0',
//           title: "SCHOOL APP API",
//           description: "Professional Finder API Documentation",
//           contact: {
//               name: "EBS Developers",
//           },
//           servers: ["http://localhost:3001"],
//       },
//       basePath: '/',
//       components: {
//         securitySchemes: {
//           Authorization: {
//               type: 'apiKey',
//               in: 'header',
//               name: 'Authorization'
//           }
//         }
//       },
//       security: [{
//           Authorization: []
//       }]
//   },
//   host: "localhost:3001",    
//   apis: ['server.js'],
// };

// const swaggerDocs = swaggerJsDoc(swaggerOptions);
// console.log(swaggerDocs);
// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * /school:
 *  get:
 *    description: Get all school
 *    responses:
 *    200:
 *      description: success
 * 
 */
// app.get('/school',(req,res) =>{
//   res.send([
//     {
//       id:1,
//       title:"School App",
//     }
//   ])
// });


// app.use(express.static(__dirname + ''));
// // For all GET requests, send back index.html (PathLocationStrategy) (Refresh Error)
// app.get('*', (req,res) => {
//   res.sendFile(path.join(__dirname, '/public/docs/index.html'));
// });


// simple route
