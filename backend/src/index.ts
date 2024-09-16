
import dotenv from "dotenv";
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/user/auth"
import bikesUserRoutes from "./routes/user/bikes"
import bookingRoutes from "./routes/user/booking"
import locationRoutes from "./routes/user/location"

import bikesadminRoutes from "./routes/admin/bikes"
import adminAuthRoutes from "./routes/admin/auth"
import locationAdminROutes  from "./routes/admin/location"

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
// user routes
app.use("/api/user/auth", authRoutes)
app.use("/api/user/bikes", bikesUserRoutes)
app.use("/api/user/location", locationRoutes)
app.use("/api/user/booking/", bookingRoutes)

// admin routes
app.use("/api/admin/auth", adminAuthRoutes)
app.use("/api/admin/bikes", bikesadminRoutes)
app.use("/api/admin/location/:id", locationAdminROutes)

app.listen(PORT, () => {

    console.log(`App running on ${PORT}`);
    
})