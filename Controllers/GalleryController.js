import Gallery from "../Models/GalleryModel.js";

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
    res.status(500).json({ message: error.message });
  }
};

// GET /api/gallery
export const getGallery = async (req, res) => {
  try {
    const data = await Gallery.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE /api/gallery/:id
export const deleteGallery = async (req, res) => {
  try {
    const { id } = req.params;

    await Gallery.findByIdAndDelete(id);

    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};