const productsModel = require("../models/products")

function index(req, res) {

  const listProducts = productsModel.getAll()
  res.render('index', { listProducts })

};


module.exports = { index, };