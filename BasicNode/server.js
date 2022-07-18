const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const indexRouter = require('./router.js');
const db  = require('./db');
 
const app = express();
  
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
app.put('/user/add/:id', (req, resp) => {
  const data =[req.body.name,req.body.email,req.body.password,req.params.id];
  db.query("UPDATE employee SET name = ?,email =?, password =? where id =? ", data,(error,result,fields) =>{
    if (error) throw error;
    resp.send(result)
  });
    console.log(data,"result")
});

app.delete('/user/add/:id', (req,resp) => {
  db.query("DELETE FROM employee WHERE id =" +req.params.id,(error,results) => {
     if (error) throw error;
     resp.send(results)
  });
  
});
