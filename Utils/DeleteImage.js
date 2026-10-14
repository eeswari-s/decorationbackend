import cloudinary from "../Config/Cloudinary.js";

// Delete a Cloudinary image using its URL
// e.g. https://res.cloudinary.com/<cloud>/image/upload/v123/Decoration/abc.jpg -> "Decoration/abc"
export const deleteImage = async (url) => {
  try {
    const match = url?.match(/\/upload\/(?:v\d+\/)?(.+)\.[a-zA-Z0-9]+$/);

    if (!match) return;

    await cloudinary.uploader.destroy(match[1]);
  } catch (error) {
    console.error("Cloudinary delete error:", error.message);
  }
};
