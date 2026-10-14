import dotenv from "dotenv";

dotenv.config({ quiet: true });

// Stop the server early if any required setting is missing
const required = [
  "MONGO_URI",
  "CLOUDINARY_CLOUD_NAME",
  "CLOUDINARY_API_KEY",
  "CLOUDINARY_API_SECRET",
  "JWT_SECRET",
  "ADMIN_USERNAME",
  "ADMIN_PASSWORD",
];

const missing = required.filter((key) => !process.env[key]);

if (missing.length) {
  console.error(`Missing env variables: ${missing.join(", ")}`);
  process.exit(1);
}
