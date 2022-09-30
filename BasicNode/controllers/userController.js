const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./../db');
const app = express();
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const { query, response } = require('express');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
jwtkey = "jwt"
const generator = require('generate-password');
const { title } = require('process');
// const validator = require("email-validator");
// var validator = require('validator')
// const {signupValidation} = require('./../validation');
const { body, validationResult } = require('express-validator');

// const router = express();

const swaggerOptions ={
  swaggerDefinition: {
    // openapi: '3.0.0',
    info:{
      title: "School Api",
      version:'1.0.0'
    }
  },
  apis: ['./controllers/userController.js'],
  };

  const swaggerDocs = swaggerJSDoc(swaggerOptions);
  router.use('/api-docs', swaggerUi.serve);
  router.get('/api-docs', swaggerUi.setup(swaggerDocs));
  console.log(swaggerDocs);


/**
 * @swagger
 * /userslist:
 *  get:
 *    description: Get all list
 *    responses:
 *        200:
 *          description: Success
 * 
 */
router.get('/userslist', (req, res) => {
  db.query(
    `SELECT * FROM  users;`,
    // "SELECT users.*, roles.* FROM users LEFT JOIN roles ON users.role_id=roles.id",
    (err, result) => {
      console.log(err);
      return res.json(result);
    }
  )
});

/**
 * @swagger
 * /users:
 *  get:
 *    description: Get all list
 *    responses:
 *        200:
 *          description: Success
 * 
 */
router.get("/users", (req, res) => {
  console.log(req.query.role, "mydata")
  db.query(
    `SELECT * FROM  users where role_id = ` + req?.query.role,
    (err, result) => {
      console.log(err)
      console.log(result);
      return res.json(result);
    }
  )
});
/**
 * 
 */
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



/**
 * @swagger
 * /user:
 *  post:
 *    description: Post all user
 *    parameters:
 *    name:name
 *    email:email
 *    password:password
 *    role_id:role_id
 *    responses:
 *        200:
 *          description: Success
 * 
 */
router.post('/user', [
  body('email', 'Enter a valid Email').isEmail(),
], (req, res) => {

  // let hash = bcrypt.hashSync(req.body.password, saltRounds);

  var name = req.body.name;
  console.log(name);
  var email = req.body.email



  // validator.isEmail(email);
  // match(
  //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  // );

  // if (validator.validate(req.body.email)){
  //   // res.send("Email is Valid")
  // }
  // else{
  //   res.send("Email is Invalid")
  // }
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

/**
 * @swagger
 * /user/:id:
 *  put:
 *    description: Update Data Here
 *    responses:
 *        200:
 *          description: Success
 * 
 */
router.put('/user/:id', (req, res) => {
  const data = [req.body.name,
  req.body.email,
  // .match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/),
  // req.body.email,
  // req.body.password,
  req.params.id];
  console.log(req, "kjgdfkgf")
  console.log(req.body, "erytuey")
  console.log(req.body.name, "NAmeeee")
  console.log(req.body.email, "EMAILLL")
  console.log(req.params.id, "IDDDDD")

  db.query("UPDATE users SET name = ?,email =? where id =? ", data, (err, result) => {
    console.log(req.params.id, "dgfhrtfhrt")
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

        const userDetails = result[0];
        delete userDetails.password;
        return res.status(200).send({
          message: 'Logged In!',
          token,
          user: userDetails,
        })
      } else {
        res.send({ message: "Wrong email/password combination!" });
      }
    }
  );
});

router.get("/profile", (req, res) => {
  console.log(req.body.user_id, "mydata")
  db.query(
    `SELECT * FROM profile WHERE user_id=` + req.body.user_id,
    (err, result) => {

      console.log(err)
      console.log(result)
      return res.json(result);
    }
  )
});



// /api/user/add
router.post('/student/profile/', (req, res) => {
  // const user_id = [req.body.params.id];
  console.log(req.params.user_id, "get");
  var user_id = req.body.user_id;
  var class_name = req.body.class_name;
  var section = req.body.section;

  var sql = "INSERT INTO profile (user_id,class_name, section) VALUES ('" + user_id + "','" + class_name + "','" + section + "')";
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
        return res.json(response);
      }
    });
});




//Students profile
router.post('/profile/:user_id', (req, res) => {
  const data = [req.params.user_id, req.body.class_name, req.body.section];
  console.log(req, "gkljn")

  console.log(req.body, "jdsh")
  console.log(data)
  db.query(`SELECT * FROM profile WHERE user_id=?`, data, (err, result) => {
    console.log(req.params.user_id, "id")
    console.log(req.body.class_name, "class name")
    console.log(req.body.section, "section")
    console.log(err);
    console.log(result, "result is here")
    // return res.json(result);
    if (result.length <= 0) {
      console.log("Insert")
      var user_id = req.params.user_id;
      var class_name = req.body.class_name;
      var section = req.body.section;
      var sql = "INSERT INTO profile (user_id,class_name, section) VALUES ('" + user_id + "','" + class_name + "','" + section + "')";
      console.log(sql);
      db.query(
        sql,
        (err, result) => {
          if (err) {
            var response = {
              errorcode: err.code,
              message: 'Got Error'
            };
            console.log(response, "get error")
            // return res.json(response);
          }
          console.log(err);
          console.log(result);
        })
    } else {
      console.log("Update");

      const data = [req.params.user_id, req.body.class_name, req.body.section];
      db.query("UPDATE profile SET class_name = '" + req.body.class_name + "',section ='" + req.body.section + "' where user_id =" + req.params.user_id + " ", (err, result) => {
        console.log(req.body.class_name, "update calss 5th")
        console.log(req.body, "gfhdfhf")
        console.log(err);
        console.log(result);
        if (result) {
          var response = {
            success: 'success',
            message: 'User Got Updated'
          };
          console.log(response)
          return res.json(response);
        }
      }
      )
    }
  });
});

//Student Profile Get
router.get('/student/profile/', (req, res) => {
  db.query(
    "SELECT users.*, profile.* FROM users INNER JOIN profile ON users.id=profile.user_id",
    (err, result) => {
      console.log(result)
      if (err) {
        const response = {
          errorcode: err.code,
          message: 'Got Error'
        };
        return res.json(response);
      }
      // console.log(err);
      // console.log(res);
      if (res) {
        const response = {
          success: 'success',
          message: 'Users List has been updated',
          data: result
        };
        return res.json(response);
      }

    })
});

router.post('/teacher/subject', (req, res) => {
  // console.log(name);

  var subject_name = req.body.subject_name;

  var sql = "INSERT INTO subjects (subject_name) VALUES ('" + subject_name + "');";
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
        return res.json(response);
      }
    });

});
module.exports = router;
// export default router



