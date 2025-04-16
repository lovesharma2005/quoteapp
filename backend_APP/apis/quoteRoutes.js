const router = require('express').Router();
const Quotes = require('../models/Quote');
router.get('/allQuotes',async (req,res)=>{
    try{
        let allQuotes = await Quotes.find({});
        res.status(200).json(allQuotes);
    }
    catch{
        res.status(400).json({msg:"something went wrong"});
    }
})
router.post('/addQuotes',async (req,res)=>{
    let {author,text} = req.body;
    await Quotes.create({text,author});
    res.status(201).json({msg:"new quote added successfully"})
})
router.get('/quotes/:id',async (req,res)=>{
    let id = req.params.id;
    // console.log(id);
    // id = id.substring(1,id.length);
    // console.log(id);
    let quote = await Quotes.findById(id);
    res.status(200).json(quote)
})

module.exports = router;