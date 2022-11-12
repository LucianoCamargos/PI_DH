const fs = require("fs");

function User(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;

}

//acessa minha lista de usuários que está em um JSON
function getAll() {
  const listUsers = JSON.parse(
    fs.readFileSync("database/userLogin.json", "utf-8")
  );
  return listUsers.map(
    (user) =>
      new User(
        user.name,
        user.email,
        user.password
      )
  );
}

//função que vai receber os dados e salvar na minha lista
function create(name, email, password) {
  const newUser = new User(name, email, password);
  const listUsers = getAll();
  listUsers.push(newUser);
  fs.writeFileSync("database/userLogin.json", JSON.stringify(listUsers));
}

module.exports = {
  getAll,
  create,
}