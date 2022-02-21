export const trending = (req, res) => {
  const videos = [
    {
      title: "First Video",
      rating: 3,
      comment: 2,
      createdAt: "2 minute ago",
      views: 31,
      id: 1,
    },
    {
      title: "Second Video",
      rating: 5,
      comment: 2,
      createdAt: "10 minute ago",
      views: 59,
      id: 1,
    },
    {
      title: "Third Video",
      rating: 4,
      comment: 2,
      createdAt: "3 minute ago",
      views: 45,
      id: 1,
    },
  ];
  res.render("home", { pageTitle: "Home", videos });
};
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.send("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");
