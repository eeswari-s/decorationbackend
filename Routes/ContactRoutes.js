import express from "express";
import {
  createContact,
  getContacts,
} from "../Controllers/ContactController.js";

const router = express.Router();

router.post("/", createContact);
router.get("/", getContacts);

export default router;