let videos = [
  {
    title: "First Video",
    rating: 3,
    comment: 2,
    createdAt: "2 minute ago",
    views: 1,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 5,
    comment: 2,
    createdAt: "10 minute ago",
    views: 59,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 4,
    comment: 2,
    createdAt: "3 minute ago",
    views: 32,
    id: 3,
  },
];

export const trending = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: `Upload Video` });
};

export const postUpload = (req, res) => {
  const { title } = req.body;
  const newVideo = {
    title,
    rating: 0,
    comment: 0,
    createdAt: "just now",
    views: 0,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  return res.redirect("/");
};
