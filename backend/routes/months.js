const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.status(200).send('Hello 6 month!')
})


module.exports = router;