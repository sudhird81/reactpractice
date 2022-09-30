require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
// const { Router } = require('express');
const app = express();
const userRouter = require('./controllers/userController');
const roleRouter = require('./controllers/rolesController');
// const swaggerJSDoc = require('swagger-jsdoc')
// const swaggerUi = require('swagger-ui-express');


app.use(express.json());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors());

app.use("/", userRouter);
app.use("/", roleRouter);



app.listen(process.env.PORT, () => console.log('Server is running on port 3001'));

app.get("/", (req, res) => {

  res.json({ message: "Welcome to nodejs expressjs integration ." });
});

// const swaggerOptions = {
//   swaggerDefinition: {
//     openapi: '3.0.0',
//     info: {
//       title: "School Api",
//       version: '1.0.0',
//       description: 'A Simple School Api'
//     },
//     servers: [
//       {
//         url: "http://localhost:3001",
//       }
//     ]
//   },
//   apis: ['.controllers/userController.js'],
// };

// const swaggerDocs = swaggerJSDoc(swaggerOptions);
// app.use('/api-docs', swaggerUi.serve);
// app.get('/api-docs', swaggerUi.setup(swaggerDocs));

app.use(express.static(__dirname + ''));
// For all GET requests, send back index.html (PathLocationStrategy) (Refresh Error)
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '/public/docs/index.html'));
});


// simple route