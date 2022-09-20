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





module.exports = router;
// export default router








