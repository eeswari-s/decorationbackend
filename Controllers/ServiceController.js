import Service from "../Models/ServiceModel.js";
import { handleError } from "../Utils/HandleError.js";
import { deleteImage } from "../Utils/DeleteImage.js";

// POST /api/service
export const createService = async (req, res) => {
  try {
    const { title, description, image } = req.body;

    const service = await Service.create({
      title,
      description,
      image, // URL from Cloudinary
    });

    res.status(201).json(service);
  } catch (error) {
    handleError(res, error);
  }
};

// GET /api/service
export const getServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });
    res.status(200).json(services);
  } catch (error) {
    handleError(res, error);
  }
};

// PUT /api/service/:id
export const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image } = req.body;

    const oldService = await Service.findByIdAndUpdate(
      id,
      { title, description, image },
      { runValidators: true }
    );

    if (!oldService) {
      return res.status(404).json({ message: "Service not found" });
    }

    // Remove the old image from Cloudinary when it is replaced
    if (image && image !== oldService.image) {
      await deleteImage(oldService.image);
    }

    const updatedService = await Service.findById(id);

    res.status(200).json(updatedService);
  } catch (error) {
    handleError(res, error);
  }
};

// DELETE /api/service/:id
export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;

    const service = await Service.findByIdAndDelete(id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    await deleteImage(service.image);

    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    handleError(res, error);
  }
};
