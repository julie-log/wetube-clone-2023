const fakeUser = {
  username: "vernon",
  loggedIn: true,
};
let videos = [
  {
    title: "Seventeen - Super",
    rating: 5,
    comments: 2000,
    createdAt: "2 months ago",
    views: "2.5M",
    id: 1,
    src: "https://www.youtube.com/embed/-GQg25oP0S4",
  },
  {
    title: "부석순 (SEVENTEEN) - 파이팅 해야지 (Feat. 이영지) Official MV",
    rating: 5,
    comments: 3000,
    createdAt: "6 months ago",
    views: "3.5M",
    id: 2,
    src: "https://www.youtube.com/embed/xj5XzCBCwsc",
  },
  {
    title: "SEVENTEEN- F*ck My Life Official MV",
    rating: 4.5,
    comments: 1000,
    createdAt: "2 months ago",
    views: "1.5M",
    id: 3,
    src: "https://www.youtube.com/embed/9kpuOoIh3wU",
  },
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};

export const watch = (req, res) => {
  const id = req.params.id;
  const video = videos[id - 1];
  return res.render("watch", {
    pageTitle: `Watching Video ${video.title}`,
    video,
  });
};

export const getEdit = (req, res) => {
  const id = req.params.id;
  const video = videos[id - 1];
  res.render("edit", { pageTitle: `Editing Video ${video.title}`, video });
};
export const postEdit = (req, res) => {};
export const search = (req, res) => res.send("Search Video");
export const upload = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) => res.send("Delete Video");
