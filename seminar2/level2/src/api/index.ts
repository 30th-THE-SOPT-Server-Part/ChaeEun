import express, { Router } from 'express';

const router: Router = express.Router();

router.use('/blog', require('./blog'));
//router.use('/blog/:pageId', require('./blog')); 이거 안써도되나요
router.use('/like', require('./like'));
router.use('/signup', require('./signup'));
router.use('/user', require('./user'));

module.exports = router;