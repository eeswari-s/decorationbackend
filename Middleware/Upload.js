import multer from "multer";

const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

// Keep the file in memory; the controller sends it to Cloudinary
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      const error = new Error("Only jpg, jpeg, png and webp images are allowed");
      error.status = 400;
      cb(error);
    }
  },
});

export default upload;
