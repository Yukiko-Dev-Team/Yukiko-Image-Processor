const router = require('express').Router();
const cards = require('./cards');
const avatar = require('./avatar');
const meme = require('./meme');
router.use('/cards', cards);
router.use("/avatar", avatar);
router.use("/meme", meme);

module.exports = router;