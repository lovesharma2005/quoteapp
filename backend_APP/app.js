const express = require('express')
const app = express();
const mongoose = require("mongoose");
const port = 5000;
const cors = require('cors');
const QuoteRoutes = require("./apis/quoteRoutes")

mongoose.connect("mongodb://127.0.0.1:27017/quote").then(()=>console.log("DB connected"))
.catch((err)=>console.log(err));

app.use(express.urlencoded({extende:true}));
app.use(express.json());

app.use(cors());
app.use(QuoteRoutes);

app.listen(port,()=>{
    console.log(`server running on ${port}`);
})