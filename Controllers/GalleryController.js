import Gallery from "../Models/GalleryModel.js";
import { handleError } from "../Utils/HandleError.js";
import { deleteImage } from "../Utils/DeleteImage.js";

// POST /api/gallery
export const createGallery = async (req, res) => {
  try {
    const { image, title, description } = req.body;

    const gallery = await Gallery.create({
      image,
      title,
      description,
    });

    res.status(201).json(gallery);
  } catch (error) {
    handleError(res, error);
  }
};

// GET /api/gallery
export const getGallery = async (req, res) => {
  try {
    const data = await Gallery.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (error) {
    handleError(res, error);
  }
};

// DELETE /api/gallery/:id
export const deleteGallery = async (req, res) => {
  try {
    const { id } = req.params;

    const gallery = await Gallery.findByIdAndDelete(id);

    if (!gallery) {
      return res.status(404).json({ message: "Gallery item not found" });
    }

    await deleteImage(gallery.image);

    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    handleError(res, error);
  }
};
