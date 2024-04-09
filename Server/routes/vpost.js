import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const { Schema, model } = mongoose;
const PostSchema = new Schema(
  {
    body: {
      type: String,
    },
    type: {
      type: String,
      enum: ["vpost", "reply", "repost"],
      required: true,
    },
    originalPost: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vpost",
      autopopulate: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
      autopopulate: { select: "username fname lname avatar", maxDepth: 2 },
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile",
        autopopulate: { select: "username", maxDepth: 1 },
      },
    ],
    replies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "VPost",
        autopopulate: { maxDepth: 1 },
      },
    ],
  },
  { timestamps: true },
  { collection: "vposts" }
);

tweetSchema.plugin(autopopulate);

const VPost = model("Post", PostSchema);
export default VPost;