import dotenv from "dotenv"

dotenv.config();

const cloudinary_cloud_name = process.env.CLOUDINARY_CLOUD_NAME || "clodu";
const cloudinary_api_key = process.env.CLOUDINARY_API_KEY  || "886";
const cloudinary_api_secret = process.env.CLOUDINARY_API_SECRET || "89";
const cloudinary_url = process.env.CLOUDINARY_URL || "";


// config/cloudinary.js or in your main app.js/index.js file

const cloudinary = require('cloudinary').v2;

// Configuration
cloudinary.config({
  cloud_name: cloudinary_cloud_name, // Your Cloudinary cloud name
  api_key: cloudinary_api_key, // Your Cloudinary API key
  api_secret: cloudinary_api_secret, // Your Cloudinary API secret
});

module.exports = cloudinary;


