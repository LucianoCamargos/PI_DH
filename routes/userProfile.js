let express = require('express');
let router = express.Router();

const controller = require("../controllers/userProfile")
const createUserMiddleware = require("../middlewares/userMiddlewares");

router.get('/', controller.userProfile);

//post para criação de usuário
router.post('/criarNovo', 
createUserMiddleware.fieldsValidation, 
createUserMiddleware.validateUser, 
controller.createUser
)


module.exports = router;
