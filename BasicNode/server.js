const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const indexRouter = require('./router.js');
const db  = require('./db');
 
const app = express();
const bcrypt = require('bcryptjs');  
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
 
app.listen(3000,() => console.log('Server is running on port 3000'));


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


app.post('/user/add', (req, res) => {
  console.log(req.body.name);

   var username = req.body.name;
   var email = req.body.email;
   var password = req.body.password;

var sql = "INSERT INTO employee (name, email, password) VALUES ('"+username+"','"+email+"','"+password+"');";
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

app.post("/login", (req, res) => {
  const email = req.body.email;
  var condition = email ? { email: { [Op.iLike]: `%${email}%` } } : null;
  models.users.findAll({ where: condition })
    .then((user) => {
      if (user.length < 1) {
        return res.status(200).json({
          code: 400,
          status: "error",
          message: "Email not exist",
        });
      }
      bcrypt.compare("'" + req.body.password + "'", user[0].password, function (
        err,
        result
      ) {
        if (err) {
          return res.status(200).json({
            code: 401,
            status: "error",
            message: "Auth failed",
          });
        } else if (result === true) {
          const token = jsonwt.sign(
            {
              user_id: user[0].id,
              email: user[0].email,
            },
            "secret",
            {
              expiresIn: "8h",
            }
          );
          let name = user[0].firstname +' '+user[0].lastname;
          return res.status(200).json({
            code: 200,
            status: "success",
            message: "Auth successful",
            name:name,
            email: user[0].email,
            token: token,
            user_id:user[0].id,
          });
        } else {
          return res.status(200).json({
            code: 401,
            status: "error",
            message: "Incorrect password",
          });
        }
      });
    })
    .catch((err) => {
      res.status(500).json({
            code: 500,
            status: "error",
            error: err,
            message: "Internal error occured",
      });
    });
});