import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";
import courseRoute from "./routes/course.route.js";
import mediaRoute from "./routes/media.route.js";
import purchaseRoute from "./routes/purchaseCourse.route.js";
import courseProgressRoute from "./routes/courseProgress.route.js";
import path from 'path';

dotenv.config({});

// call database connection here
connectDB();
const app = express();

const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

// default middleware
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
 
// apis
app.use("/api/v1/media", mediaRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/course", courseRoute);
app.use("/api/v1/purchase", purchaseRoute);
app.use("/api/v1/progress", courseProgressRoute);
 
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,'../client/dist')));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname,'../client','dist','index.html'));
    });
}
 
app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);
})







// PORT = 3000
// STRIPE_SECRET_KEY = sk_test_51QX4i103qU4qcLpWTOgQ5BUfzJbsKfO1Y2QozSi8RlObl0zVzbAujnfi3y59a2MjrK8hkqHJ9BNWOOFdltsErr1F004xZewckg
// STRIPE_PUBLISHABLE_KEY = pk_test_51QX4i103qU4qcLpWwDWiQJVovdwIldzNJrOCxV4WAmJGD7RmNMlLdKEMnWezZZvA662FXNvlLZJ52oX5JcZGoT8O00MAGlg0yO
// MONGO_URI = mongodb+srv://dasramesh8343003905:RNoQWmXVkOxXUXhb@cluster0.zuqwf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// WEBHOOK_ENDPOINT_SECRET = whsec_2ISA16HcLW26gCM2W9TK5Vav66KpME22
// SECRET_KEY = mysecretkey
// CLOUD_NAME = duysrrvn9
// API_KEY = 955428786291228
// AP1_SECRET = Xu2zPaSlk4nncc1twv8D6ibn4WU
// FRONTEND_URL = http://localhost:5173
// NODE_ENV = development


