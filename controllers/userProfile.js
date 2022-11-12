const usersModel = require('../models/users')

//função para renderizar página de usuário
function userProfile(req, res) {
  res.render('userProfile')
};


//criação de usuário
function createUser(req, res) {
  const { name, email, password } = req.body
  console.log(req.body)
  usersModel.create(name, email, password)
  return res.redirect("/login");

}
module.exports = { userProfile,createUser };