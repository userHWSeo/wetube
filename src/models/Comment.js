import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  createAt: {
    type: Date,
    required: true,
    ref: "Comment",
  },
  video: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Video" },
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
