import rateLimit from "express-rate-limit";

const options = (limit, message) => ({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: { message },
});

// Admin login: 10 tries per 15 minutes
export const loginLimiter = rateLimit(
  options(10, "Too many login attempts, try again after 15 minutes")
);

// Public forms (contact / booking): 20 per 15 minutes
export const formLimiter = rateLimit(
  options(20, "Too many requests, try again after 15 minutes")
);
