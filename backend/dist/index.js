"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const auth_1 = __importDefault(require("./routes/user/auth"));
const bikes_1 = __importDefault(require("./routes/user/bikes"));
const booking_1 = __importDefault(require("./routes/user/booking"));
const location_1 = __importDefault(require("./routes/user/location"));
const bikes_2 = __importDefault(require("./routes/admin/bikes"));
const auth_2 = __importDefault(require("./routes/admin/auth"));
const location_2 = __importDefault(require("./routes/admin/location"));
const booking_2 = __importDefault(require("./routes/admin/booking"));
const user_1 = __importDefault(require("./routes/admin/user"));
const razorpay_1 = __importDefault(require("razorpay"));
dotenv_1.default.config();
const front_end_url = process.env.FRONTEND_URL || "";
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use((0, express_1.default)());
app.use(express_1.default.json()); // to parse incoming requests with JSON Payloads( from req.body )
app.use((0, cors_1.default)({
    origin: front_end_url,
    credentials: true,
}));
app.use((0, cookie_parser_1.default)());
const razorpay = new razorpay_1.default({
    key_id: String(process.env.RAZORPAY_KEY),
    key_secret: String(process.env.RAZORPAY_KEY_SECRET)
});
// user routes
app.use("/api/user/auth", auth_1.default);
app.use("/api/user/bikes", bikes_1.default);
app.use("/api/user/location", location_1.default);
app.use("/api/user/booking/", booking_1.default);
// admin routes
app.use("/api/admin/auth", auth_2.default);
app.use("/api/admin/bikes", bikes_2.default);
app.use("/api/admin/location", location_2.default);
app.use("/api/admin/booking", booking_2.default);
app.use("/api/admin/users", user_1.default);
app.listen(PORT, () => {
    console.log(`App running on ${PORT}`);
});
