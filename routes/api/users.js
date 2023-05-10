const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/users");
const multer = require('multer');
const upload = multer();

/*---------- Public Routes ----------*/
// whichever file is handling a file upload, apply multer
// "photo" comes from the key on the form-data object we created on the
// signup page in the react model!
router.post("/signup", upload.single('photo'), usersCtrl.signup);
router.post("/login", usersCtrl.login);
router.get('/:username', usersCtrl.profile);
/*---------- Protected Routes ----------*/

module.exports = router;



/*---------- Protected Routes ----------*/



