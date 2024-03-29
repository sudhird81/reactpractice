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
const { title } = require('process');
// const { check, validationResult } = require('express-validator');
const { signupValidation, loginValidation } = require('./../validation');
const { validationResult } = require('express-validator');
const emailvalidator = require("email-validator");

// /api/role/get
router.get("/roles", (req, res) => {
  db.query(
    `SELECT * FROM  roles;`,
    (err, result) => {
      // console.log(result);
      return res.json(result);
    }
  )

});
// /api/role/add
router.post('/role', (req, res) => {
  console.log(name);

  var name = req.body.name;

  var sql = "INSERT INTO roles (name) VALUES ('" + name + "');";
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


// /api/user/role/:id
router.put('/role/:id', (req, res) => {
  const data = [req.body.name, req.params.id];
  db.query("UPDATE roles SET name = ?, role_id where id =? ", data, (err, result) => {
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

// /api/user/role/:id
router.delete('/role/:id', (req, res) => {
  db.query("DELETE FROM roles WHERE id =" + req.params.id, (err, result) => {
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

// /api/get-users-list
router.get('/get-users-list', (req, res) => {
  db.query(
    "SELECT users.id,users.name as userName,users.email, roles.name as roleName FROM users LEFT JOIN roles on roles.id = users.role_id",
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

router.get("/student/profile/:user_id", (req, res) => {
  console.log(req.body.params.id)
  db.query(
    `SELECT * FROM profile WHERE user_id=?;`,
    (err, result) => {
      // console.log(result);
      return res.json(result);
    }
  )
});

router.post('/student/profile/:user_id', (req, res) => {
  var class_name = req.body.class_name;
  var section = req.body.section;

  var sql = "INSERT INTO users (class_name, section) VALUES ('" + class_name + "','" + section + "') WHERE user_id=?";
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

router.get("/profile/:user_id", (req, res) => {
  db.query(
    `SELECT * FROM profile WHERE user_id=?;`,
    (err, result) => {
      console.log(result);
      return res.json(result);
    }
  )
});


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

router.post('/userz',signupValidation,(req, res) => {
  // console.log(name);
  var name = req.body.name;
  var email = req.body.email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
  
// if((req.body.email.match)){
//       // Your call to model here
//       res.status(200).send('valid Email');
// }
// else{
//    res.status(400).send('Invalid Email');
// }
  var sql = "INSERT INTO db (name,email) VALUES ('" + name + "','" + email + "');";
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








