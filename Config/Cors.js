// Frontend URLs that are allowed to call this API
// Add your live website URL here after deploying the frontend
const allowedOrigins = [
  "http://localhost:5173", // Vite dev server
  "http://localhost:3000", // React (CRA) / Next.js dev server
  // "https://kalaivanidecoration.com",
];

const corsOptions = {
  origin: allowedOrigins,
};

export default corsOptions;
