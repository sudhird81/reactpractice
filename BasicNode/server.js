require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const indexRouter = require('./router.js');
const db  = require('./db'); 
const app = express();
const bcrypt = require('bcryptjs');  
const { query } = require('express');
const nodemailer = require('nodemailer');

app.use(express.json()); 
app.use(bodyParser.json());
 
app.use(bodyParser.urlencoded({
    extended: true
}));
 
app.use(cors());
 
app.use('/api', indexRouter);
 
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


// simple route
app.get("/", (req, res) => {

  res.json({ message: "Welcome to nodejs expressjs integration ." });
});


// simple route
app.get("/users", (req, res) => {
  db.query(
    `SELECT * FROM  employee;`,
    (err, result) => {
      // console.log(result);
      return res.json(result);
    }
  )
 
});

// simple route
// app.delete("/user/delete/:id", (req, res) => {
//   res.json({ message: "Welcome to nodejs expressjs integration ." });
// });


app.post('/register', (req, res) => {
  console.log(req.body.name);

   var name = req.body.name;
   var email = req.body.email;
   var password = req.body.password;

var sql = "INSERT INTO employee (name, email, password) VALUES ('"+name+"','"+email+"','"+password+"');";
console.log(sql);
db.query(
  sql,
  (err, result) => {
    if(err){
      var response = {
        errorcode : err.code,
        message : 'Got Error'
      };
      return res.json(response);
    }
    console.log(err);
    console.log(result);
    if(result){
      var response = {
        success : 'success',
        message : 'User Got inserted'
      };
      
  let mailTransporter = nodemailer.createTransport({
	service: 'gmail',
  secure:false,
	auth: {
		user: process.env.USER_MAIL,
		pass: process.env.TOKEN
	}
});

let mailDetails = {
	from: 'ebsdavindersingh.com',
	to: email,
	subject: 'Test mail',
	html: `<h1 style='color: red'>Thanks for signing up ${name}</h1>`,

  attachments: [
    {
      filename: 'ebs.png',
      path: 'assets/ebs.png'
    }
  ]
};

mailTransporter.sendMail(mailDetails, function(err, data) {
	if(err) {
		console.log('Error Occurs',err);
	} else {
		console.log('Email sent successfully');
	}
});

      return res.json(response);
    }
  });
  

});
app.put('/user/update/:id', (req, res) => {
  const data =[req.body.name,req.body.email,req.body.password,req.params.id];
  db.query("UPDATE employee SET name = ?,email =?, password =? where id =? ", data,(err,result) =>{
    if(err){
      var response = {
        errorcode : err.code,
        message : 'Got Error'
      };
      return res.json(response);
    }
    console.log(err);
    console.log(result);
    if(result){
      var response = {
        success : 'success',
        message : 'User Got Updated'
      };
      return res.json(response);
    }
  });
});

app.delete('/user/delete/:id', (req,res) => {
  db.query("DELETE FROM employee WHERE id =" +req.params.id,(err,result) => {
    if(err){
      var response = {
        errorcode : err.code,
        message : 'Got Error'
      };
      return res.json(response);
    }
    console.log(err);
    console.log(result);
    if(result){
      var response = {
        success : 'success',
        message : 'User Got Deleted'
      };
      return res.json(response);
    }
  });
  
});

app.post(process.env.LOGIN, (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM employee WHERE email =? AND password =?",
    [email, password],
    (err, result) => {
      console.log(result,query)
      if(err) {
        res.send({err:err});
        
      }
      if (result.length > 0){
        res.send(result);
      } else {
        res.send({message:"Wrong email/password combination!"});

      }
    }
  );  
  });
