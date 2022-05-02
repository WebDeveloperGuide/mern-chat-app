import express from 'express';
import dotenv from 'dotenv';

// Read value from .env file
dotenv.config();

const app = express(); 
const PORT = process.env.PORT || 1041

app.get('/',(req,res)=>{
	res.send({"message":"API TESTING"})
})

app.listen(PORT,()=>{
	console.log("Server is running on PORT "+ PORT)
})