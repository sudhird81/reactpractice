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
const saltRounds = 10;
const { query } = require('express');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
jwtkey="jwt"
const generator = require('generate-password');
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
  let hash = bcrypt.hashSync(req.body.password, saltRounds);

   var name = req.body.name;
   var email = req.body.email;
   var password = hash;

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
      // jwt.sign({result},jwtkey,{expiresIn:'1h'},(err,token)=>{
      //   res.status(201).json({token})
      // })
      
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

app.post('/loginkkk', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
console.log("sddsfdsf");
  db.query(
    "SELECT * FROM employee WHERE email =? AND password =?",
    [email, password],
    (err, result) => {
      console.log(result,query)
      if(err) {
        res.send({err:err});
        
      }
      if (result.length > 0){
        // res.send(result);
        // const email = {email,id}
        const token = jwt.sign(
          {
            email: req.body.email,
            id: result[0].id,
          },
          "secret",
          {
            expiresIn: "2h",
          }          
        );
        const userDetais = result[0];
        delete userDetais.password;
        return res.status(200).send({
          message:'Logged In!',
          token,
          user: userDetais
        })
      } else {
        res.send({message:"Wrong email/password combination!"});

      }
    }
  );  
  });

  app.post('/Contact', (req, res) => {
    console.log(req.body.name);
    
  
     var name = req.body.name;
     var email = req.body.email;
     var message = req.body.message;
  
  var sql = "INSERT INTO contact (name, email, message) VALUES ('"+name+"','"+email+"','"+message+"');";
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
          message : 'Your application has been submitted'
       
        };
        // jwt.sign({result},jwtkey,{expiresIn:'1h'},(err,token)=>{
        //   res.status(201).json({token})
        // })
        
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
    html: `<h1 style='color: red'>Thank you for getting in touch!  ${name}</h1><br>
           <p>We appreciate you contacting us. One of our colleagues will get back in touch with you soon!Have a great day!</p>`,
  
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

    //school registration---->



  app.post('/registration', (req, res) => {
    
    // let hash = bcrypt.hashSync(req.body.password, saltRounds);
  
     var name = req.body.name;
     console.log(name);
     var email = req.body.email;
     var password = generator.generate({
      length: 10,
      numbers: true
    });
    
     var role_id = req.body.role_id;     
  
  var sql = "INSERT INTO users (name, email, password, role_id) VALUES ('"+name+"','"+email+"','"+password+"','"+role_id+"');";
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
        // jwt.sign({result},jwtkey,{expiresIn:'1h'},(err,token)=>{
        //   res.status(201).json({token})
        // })

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
          html: `<h1 style='color: red'>Thanks for signing up ${name}</h1> <br>
          <h1>Here is your password ${password}</h1>`,
          
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
  //school Update---->

app.put('/registration/update/:id', (req, res) => {
  const data =[req.body.name,req.body.email,req.body.password,req.params.id];
  db.query("UPDATE users SET name = ?,email =?, password =?, role_id =? where id =? ", data,(err,result) =>{
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

 //school Delete---->

app.delete('/registration/delete/:id', (req,res) => {
  db.query("DELETE FROM users WHERE id =" +req.params.id,(err,result) => {
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

 //school Login---->

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const roleName = req.body.roleName
console.log("hdfd",req)
  db.query(
    "SELECT users.* ,roles.* FROM users LEFT JOIN roles on roles.id = users.role_id WHERE email =? AND password =?",
    
    [email, password],
    (err, result) => {
            console.log(result,query)
      if(err) {
        res.send({err:err});
        console.log("password check",result)
      }
      
      if (result.length > 0){
        
        // res.send(result);
        // const email = {email,id}
        const token = jwt.sign(
          {
            email: req.body.email,
            id: result[0].id,
          },
          "secret",
          {
            expiresIn: "2h",
          }          
        );
        const userDetais = result[0];
        delete userDetais.password;
        return res.status(200).send({
          message:'Logged In!',
          token,
          user: userDetais,
         
        })
      } else {
        res.send({message:"Wrong email/password combination!"});

      }
    }
  );  
  });
  
//role----------->


  app.post('/role', (req, res) => {
    console.log(name);
     
     var name = req.body.name;
    
  var sql = "INSERT INTO roles (name) VALUES ('"+name+"');";
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

  //role Update--------->

  app.put('/role/update/:id', (req, res) => {
    const data =[req.body.name,req.params.id];
    db.query("UPDATE roles SET name = ?, role_id where id =? ", data,(err,result) =>{
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

  //role delete--------->

  app.delete('/role/delete/:id', (req,res) => {
    db.query("DELETE FROM users WHERE id =" +req.params.id,(err,result) => {
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

  //All user list--------->

  app.get('/get-users-list',(req,res)=>{
    db.query(
      "SELECT users.id,users.name as userName,users.email, roles.name as roleName FROM users LEFT JOIN roles on roles.id = users.role_id",
      (err,result)=>{
console.log(result)
      if(err){
        const response = {
          errorcode : err.code,
          message : 'Got Error'
        };
        return res.json(response);
      }
      // console.log(err);
      // console.log(res);
      if(res){
        const response = {
          success : 'success',
          message : 'Users List has been updated',
          data: result
        };
        return res.json(response);
      }

    })
  })