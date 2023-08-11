const fakeUser = {
  username: "vernon",
  loggedIn: true,
};

export const trending = (req, res) => {
  const videos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => res.send("Search Video");
export const see = (req, res) =>
  res.render("watch", { pageTitle: `Watch Video ${req.params.id}` });
export const edit = (req, res) =>
  res.render("edit", { pageTitle: `Edit Video ${req.params.id}` });

export const upload = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) => res.send("Delete Video");
