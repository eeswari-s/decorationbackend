export const uploadImage = (req, res) => {
  try {
    console.log("FILE:", req.file); // debug

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    res.status(200).json({
      message: "Image uploaded successfully",
      imageUrl: req.file.path,
    });
  } catch (error) {
    console.error("UPLOAD ERROR:", error);
    res.status(500).json({
      message: error.message || "Upload failed",
    });
  }
};