import express from "express";
import dotenv from "dotenv";


dotenv.config({});

// call database connection here
const app = express();

const PORT = process.env.PORT || 3000;

// default middleware
app.use(express.json());
 
 
app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);
})

