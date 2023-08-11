import express from 'express';
import validator from '../middlewares/validator.js';
import signUp from '../controllers/users/signUp.js';
import signin from '../controllers/users/signIn.js';
import signOut from '../controllers/users/signOut.js'
import { userSignIn, userSignUp } from '../schemas/users.js';
import accountExistsSignUp from '../middlewares/accountSignUp.js';
import accountExistsSignIn from '../middlewares/accountSignIn.js'
import accountHasBeenVerified from '../middlewares/isVerified.js';
import passwordIsOk from '../middlewares/passIsOk.js';
import passport from '../middlewares/passport.js';
import signintoken from '../controllers/users/signInToken.js';
import roleUpdate from '../controllers/users/roleUpdate.js';
import reSend from '../controllers/users/reSendEmail.js';
import userIsVerified from '../controllers/users/is_verified.js';
import userGoogle from '../controllers/users/user_Google.js';
import decodeToken from '../middlewares/decodeGoogleToken.js';


const router = express.Router()

router.get('/', function (req, res, next) {
  res.send("respond with a resource");
})

router.post('/verify/resendcode', reSend)
router.put('/verify/:verify_code', userIsVerified)
router.post('/signup', validator(userSignUp), accountExistsSignUp, signUp);
router.post('/signup/google', decodeToken, accountExistsSignUp, userGoogle, signin)
router.post('/signin/google', decodeToken,accountExistsSignIn, passwordIsOk, signin)
router.post('/signin', validator(userSignIn), accountExistsSignIn, accountHasBeenVerified, passwordIsOk, signin);
router.post('/signout', passport.authenticate('jwt', { session: false }), signOut)
router.post('/token', passport.authenticate('jwt', { session: false }), signintoken)
router.put('/role/author/:id', passport.authenticate('jwt', { session: false }, roleUpdate))


export default router