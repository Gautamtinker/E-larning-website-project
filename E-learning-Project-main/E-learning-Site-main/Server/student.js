const express = require('express');
const router = express.Router();

router.get("", (req,res)=>{
    res.send("Jai shree ram, Hare krishna");
} );

//router.post();

module.exports = router;