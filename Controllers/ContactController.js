import Contact from "../Models/ContactModel.js";
import { handleError } from "../Utils/HandleError.js";

// POST /api/contact
export const createContact = async (req, res) => {
  try {
    const { name, phone, message } = req.body;

    const contact = await Contact.create({
      name,
      phone,
      message,
    });

    res.status(201).json(contact);
  } catch (error) {
    handleError(res, error);
  }
};

// GET /api/contact
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    handleError(res, error);
  }
};

// DELETE /api/contact/:id
export const deleteContact = async (req, res) => {
  try {
    const item = await Contact.findByIdAndDelete(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    handleError(res, error);
  }
};
