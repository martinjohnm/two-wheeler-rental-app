

const cloudinary = require("../cloudinary/cloudinary") // Adjust the path accordingly

export async function uploadImage(filePath : string) {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'two-wheeler-app-media', // Optional: specify a folder
      use_filename: true, // Optional: use the original filename
      unique_filename: true, // Optional: ensure unique filenames
    });
    console.log('File uploaded to Cloudinary:', result.secure_url);
    return result.secure_url; // URL of the uploaded image
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error;
  }
}

// Example usage

