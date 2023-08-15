// const fakeUser = {
//   username: "vernon",
//   loggedIn: true,
// };

// let videos = [
//   {
//     title: "Seventeen - Super",
//     rating: 5,
//     comments: 2000,
//     createdAt: "2 months ago",
//     views: "2.5M",
//     id: 1,
//     src: "https://www.youtube.com/embed/-GQg25oP0S4",
//   },
//   {
//     title: "부석순 (SEVENTEEN) - 파이팅 해야지 (Feat. 이영지) Official MV",
//     rating: 5,
//     comments: 3000,
//     createdAt: "6 months ago",
//     views: "3.5M",
//     id: 2,
//     src: "https://www.youtube.com/embed/xj5XzCBCwsc",
//   },
//   {
//     title: "SEVENTEEN- F*ck My Life Official MV",
//     rating: 4.5,
//     comments: 1000,
//     createdAt: "2 months ago",
//     views: "1.5M",
//     id: 3,
//     src: "https://www.youtube.com/embed/9kpuOoIh3wU",
//   },
// ];

import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ createdAt: "desc" });
    console.log(videos);
    return res.render("home", { pageTitle: "Home", videos });
  } catch (errors) {
    return res.render("server-errors", errors);
  }
};

export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.status(404).render("404", { pageTitle: "Video not found..." });
  }
  return res.render("watch", { pageTitle: video.title, video });
};

export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.status(404).render("404", { pageTitle: "Video not found..." });
  }
  return res.render("edit", { pageTitle: `Edit : ${video.title}`, video });
};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags, url } = req.body;
  const video = await Video.exists({ _id: id });
  if (!video) {
    return res.status(404).render("404", { pageTitle: "Video not found..." });
  }
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: Video.formatHashtags(hashtags),
    url,
  });
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: `Upload Video` });
export const postUpload = async (req, res) => {
  const { title, description, hashtags, url } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags: Video.formatHashtags(hashtags),
      url,
    });
    return res.redirect("/");
  } catch (error) {
    return res.status(400).render("upload", {
      pageTitle: `Upload Video`,
      errorMessage: error._message,
    });
  }
};
export const deleteVideo = async (req, res) => {
  const { id } = req.params;
  await Video.findByIdAndDelete(id);
  return res.redirect("/");
};

export const search = async (req, res) => {
  const { keyword } = req.query;
  let videos = [];
  if (keyword) {
    videos = await Video.find({
      title: {
        $regex: new RegExp(`${keyword}`, "i"),
      },
    });
  }
  return res.render("search", { pageTitle: `Search Video`, videos });
};
