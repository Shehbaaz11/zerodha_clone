const { userVerification } = require("../Middleware/authMiddleware.js");
const {Signup , Login, logout} = require("../controllers/AuthController.js")
const router = require("express").Router();

router.post("/signup",Signup); //backend
router.post("/login",Login);
router.get("/logout",logout)
module.exports = router;

router.post("/",userVerification)