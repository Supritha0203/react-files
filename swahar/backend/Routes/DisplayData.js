const express = require("express");
const router = express.Router();

router.post('/foodData',(req,res)=>{
    try {
        console.log(global.fooditems)
        res.send([global.fooditems,global.foodCat])
    } catch (error) {
        console.log(error);
        res.send('server error')
    }
})

module.exports=router;