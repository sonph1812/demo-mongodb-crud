import express from "express";
import mongoose from "mongoose";
import { router } from "./src/routes/router";
const PORT = 4500;
const app = express();
app.set('views', './src/view/')
app.set('view engine', 'ejs')
mongoose.connect('mongodb://localhost:27017/book_management').then(()=> {
    console.log('connect success!')
}).catch(()=>{
    console.log('connect not ok!')
});
app.use('',router)
app.listen(PORT,()=>{
    console.log(`${PORT}`)
})