require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const userRouter = require('./controllers/userController');
const roleRouter = require('./controllers/rolesController');
const passport = require('passport');
const cookieSession = require('cookie-session');
const passportSetup =require('./passport');


app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use("/", userRouter);
app.use("/", roleRouter);

app.use(
  cookieSession({
    name: "session",
    keys: ["cyberwolve"],
    maxAge: 24*60*60*100,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(cors())
// app.use(
//   cors({
//     origin:"http://localhost:3000",
//     methods: "GET,POST,PUT,DELETE",
//     credentials: true,
//   })
//   );



app.get("/", (req, res) => {

  res.json({ message: "Welcome to nodejs expressjs integration ." });
});


app.use(express.static(__dirname + ''));
// For all GET requests, send back index.html (PathLocationStrategy) (Refresh Error)
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '/public/docs/index.html'));
});

app.listen(process.env.PORT, () => console.log('Server is running on port 3001'));