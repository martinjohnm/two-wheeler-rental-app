
import dotenv from "dotenv";
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth"

dotenv.config();

const front_end_url = process.env.FRONTEND_URL || "";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express())
app.use(express.json()) // to parse incoming requests with JSON Payloads( from req.body )
app.use(cors({
    origin : front_end_url,
    credentials : true,
}))
app.use(cookieParser())

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {

    console.log(`App running on ${PORT}`);
    
})