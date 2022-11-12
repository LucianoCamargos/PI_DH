const fs = require("fs");

function Products(picture, title, price) {
  this.picture = picture;
  this.title = title;
  this.price = price;
  ;
}

//acessa minha lista de produtos que está em um JSON
function getAll() {
  const listProducts = JSON.parse(
    fs.readFileSync("database/bdProducts.json", "utf-8")
  );
  return listProducts.map(
    (product) =>
      new Products(
        product.picture,
        product.title,
        product.price,

      )
  );
}


module.exports = {
  getAll,

};