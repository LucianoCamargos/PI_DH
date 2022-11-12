let express = require('express');
let router = express.Router();

const controller = require("../controllers/login");
const loginMiddleware = require("../middlewares/LoginMiddlewares");

router.get('/', loginMiddleware.validationToken, controller.login);

module.exports = router;
