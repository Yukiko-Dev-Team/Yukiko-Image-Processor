const router = require('express').Router();

router.get('/', (req,res) => {
    res.json({
        message: "Avatar API v1",
        routes: {
            get: {},
            post: {}
        }
    })
})

module.exports = router;