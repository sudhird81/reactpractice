const express = require('express');
const router = express.Router();
const createError = require('http-errors');
// const swaggerJsDoc = require('swagger-jsdoc');
// const swaggerUI = require('swagger-ui-express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./../db');
const app = express();
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const { query } = require('express');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
jwtkey = "jwt"
const generator = require('generate-password');
const { title } = require('process');


// /api/users/get
router.get("/users", (req, res) => {
  db.query(
    `SELECT * FROM  users;`,
    (err, result) => {
      // console.log(result);
      return res.json(result);
    }
  )
});
router.get("/users/student", (req, res) => {
  db.query(
    `SELECT * FROM  users where role_id=2;`,
    (err, result) => {
      // console.log(result);
      return res.json(result);
    }
  )
});
router.get("/users/staff", (req, res) => {
  db.query(
    `SELECT * FROM  users where role_id=3;`,
    (err, result) => {
      // console.log(result);
      return res.json(result);
    }
  )
});
router.get("/users/teacher", (req, res) => {
  db.query(
    `SELECT * FROM  users where role_id=1;`,
    (err, result) => {
      // console.log(result);
      return res.json(result);
    }
  )
});
// /api/user/add
router.post('/user', (req, res) => {

  // let hash = bcrypt.hashSync(req.body.password, saltRounds);

  var name = req.body.name;
  console.log(name);
  var email = req.body.email;
  var password = generator.generate({
    length: 10,
    numbers: true
  });

  var role_id = req.body.role_id;

  var sql = "INSERT INTO users (name, email, password, role_id) VALUES ('" + name + "','" + email + "','" + password + "','" + role_id + "');";
  console.log(sql);
  db.query(
    sql,
    (err, result) => {
      if (err) {
        var response = {
          errorcode: err.code,
          message: 'Got Error'
        };
        return res.json(response);
      }
      console.log(err);
      console.log(result);
      if (result) {
        var response = {
          success: 'success',
          message: 'User Got inserted'

        };
        // jwt.sign({result},jwtkey,{expiresIn:'1h'},(err,USER_MAIL)=>{
        //   res.status(201).json({token})
        // })

        let mailTransporter = nodemailer.createTransport({
          service: 'gmail',
          secure: false,
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
        mailTransporter.sendMail(mailDetails, function (err, data) {
          if (err) {
            console.log('Error Occurs', err);
          } else {
            console.log('Email sent successfully');
          }
        });
        return res.json(response);
      }
    });
});
// /api/user/update 
router.put('/user/:id', (req, res) => {
  const data = [req.body.name, req.body.email, req.body.password, req.params.id];
  db.query("UPDATE users SET name = ?,email =?, password =? where id =? ", data, (err, result) => {
    if (err) {
      var response = {
        errorcode: err.code,
        message: 'Got Error'
      };
      return res.json(response);
    }
    console.log(err);
    console.log(result);
    if (result) {
      var response = {
        success: 'success',
        message: 'User Got Updated'
      };
      return res.json(response);
    }
  });
});
// /api/user/delete
router.delete('/user/:id', (req, res) => {
  db.query("DELETE FROM users WHERE id =" + req.params.id, (err, result) => {
    if (err) {
      var response = {
        errorcode: err.code,
        message: 'Got Error'
      };
      return res.json(response);
    }
    console.log(err);
    console.log(result);
    if (result) {
      var response = {
        success: 'success',
        message: 'User Got Deleted'
      };
      return res.json(response);
    }
  });
});
// /api/login
router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const roleName = req.body.roleName
  console.log("Getting result", req)
  db.query(
    "SELECT users.* ,roles.* FROM users LEFT JOIN roles on roles.id = users.role_id WHERE email =? AND password =?",

    [email, password],
    (err, result) => {
      console.log(result, query)
      if (err) {
        res.send({ err: err });
        console.log("password check", result)
      }
      if (result.length > 0) {
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
          message: 'Logged In!',
          token,
          user: userDetais,
        })
      } else {
        res.send({ message: "Wrong email/password combination!" });
      }
    }
  );
});
module.exports = router;
// export default router 