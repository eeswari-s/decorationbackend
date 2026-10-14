import crypto from "crypto";
import jwt from "jsonwebtoken";

// Compare strings in constant time
const safeEqual = (a, b) => {
  const hashA = crypto.createHash("sha256").update(String(a)).digest();
  const hashB = crypto.createHash("sha256").update(String(b)).digest();
  return crypto.timingSafeEqual(hashA, hashB);
};

// POST /api/auth/login
export const login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  const validUser = safeEqual(username, process.env.ADMIN_USERNAME);
  const validPass = safeEqual(password, process.env.ADMIN_PASSWORD);

  if (!validUser || !validPass) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const token = jwt.sign(
    { username: process.env.ADMIN_USERNAME },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
  );

  res.status(200).json({ message: "Login successful", token });
};

// GET /api/auth/me
export const me = (req, res) => {
  res.status(200).json({ username: req.admin.username });
};
