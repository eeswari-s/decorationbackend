// Send 400 for bad input (validation / invalid id), 500 for everything else
export const handleError = (res, error) => {
  const isBadRequest =
    error.name === "ValidationError" || error.name === "CastError";

  if (!isBadRequest) {
    console.error(error);
  }

  res.status(isBadRequest ? 400 : 500).json({ message: error.message });
};
