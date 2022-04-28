import express, { Router } from 'express';

const router: Router = express.Router();

router.use('/blog', require('./blog'));
router.use('/like', require('./like'));
router.use('/signup', require('./signup'));
router.use('/user', require('./user'));

module.exports = router;