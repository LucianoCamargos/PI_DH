const { body } = require("express-validator");
const jwt = require("jsonwebtoken");
const { jwtKey } = require("../config/secretsConfig");

function renderLoginPage(req, res) {
  return res.render("login", { errors: [], data: {} });
}

function authenticateUser(req, res) {
  const { email, password } = req.body;
  const token = jwt.sign({ email }, jwtKey, { expiresIn: "1h" });
  res.cookie("token", token);
  return res.redirect("/");
}

module.exports = {
  renderLoginPage,
  authenticateUser,
};