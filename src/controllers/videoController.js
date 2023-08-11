export const trending = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) => res.send("Search Video");
export const see = (req, res) =>
  res.render("watch", { pageTitle: `Watch Video ${req.params.id}` });
export const edit = (req, res) =>
  res.render("edit", { pageTitle: `Edit Video ${req.params.id}` });

export const upload = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) => res.send("Delete Video");
