const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;

const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "nguyenduy18",
  database: "fruit",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// con.connect(function (err) {
//   if (err) throw err;
//   const querySelect = "SELECT * FROM product where product_name like N'%nho%'";
//   con.query(querySelect, function (err, results) {
//     if (err) throw err;
//     console.log(results);
//   });
// });

app.get("/api/getall", (req, res) => {
  const getallProduct = "SELECT * FROM product";
  con.query(getallProduct, (err, result) => {
    res.send(result);
  });
});

app.post("/api/login", (req, res) => {
  const customer_emailLogin = req.body.customer_emailLogin;
  const customer_passwordLogin = req.body.customer_passwordLogin;
  console.log(customer_emailLogin + "||" + customer_passwordLogin);
  const sqlLogin = `SELECT * FROM fruit.customer where customer_email like '${customer_emailLogin}' and customer_password like '${customer_passwordLogin}'`;
  con.query(sqlLogin, function (err, result) {
    res.send(result);
    console.log(result);
  });
});

app.post("/api/search", (req, res) => {
  const customer_search = req.body.customer_search;
  console.log(customer_search);
  const querySelect = `SELECT * FROM product where product_name like N'%${customer_search}%'`;
  con.query(querySelect, function (err, results) {
    res.send(results);
  });
});

app.post("/api/insert", (req, res) => {
  const customer_name = req.body.customer_fullname;
  const customer_email = req.body.customer_email;
  const customer_password = req.body.customer_password;

  const sqlInsert =
    "INSERT INTO customer (customer_fullname, customer_email, customer_password) VALUES (? , ?, ?)";
  con.query(
    sqlInsert,
    [customer_name, customer_email, customer_password],
    (err, result) => {
      console.log(err);
    }
  );
});

app.get("/", (req, res) => {
  res.send("tuan Tam");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
