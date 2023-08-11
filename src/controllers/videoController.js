export const trending = (req, res) => res.send("Home");
export const search = (req, res) => res.send("Search Video");

export const see = (req, res) => {
  return res.send(`Watch ${req.params.id} Video`);
};

export const edit = (req, res) => {
  return res.send(`Edit ${req.params.id} Video`);
};
export const upload = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) => res.send("Delete Video");
