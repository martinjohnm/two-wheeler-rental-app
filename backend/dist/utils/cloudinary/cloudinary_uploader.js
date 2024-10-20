"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = uploadImage;
const cloudinary = require("../cloudinary/cloudinary"); // Adjust the path accordingly
function uploadImage(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield cloudinary.uploader.upload(filePath, {
                folder: 'two-wheeler-app-media', // Optional: specify a folder
                use_filename: true, // Optional: use the original filename
                unique_filename: true, // Optional: ensure unique filenames
            });
            console.log('File uploaded to Cloudinary:', result.secure_url);
            return result.secure_url; // URL of the uploaded image
        }
        catch (error) {
            console.error('Error uploading to Cloudinary:', error);
            throw error;
        }
    });
}
// Example usage
