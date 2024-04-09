import mongoose from "mongoose";
import VPost from "./vpost.js";
import autopopulate from "mongoose-autopopulate";
import bcrypt from "bcrypt";
const { Schema } = mongoose;

const profileSchema = new Schema(
  {
    isOnline: Boolean,
    fname: String,
    lname: String,
    email: String,
    username: String,
    password: String,
    skills: String,
    campus: String,
    avatar: String,
    banner: String,
    usertype: String, 
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "VPost",
        autopopulate: {
          maxDepth: 2,
        },
      },
    ], 
  },
  { timestamps: true },
  { collection: "profiles" }
);

// For schema methods.
class ProfileClass {
  // AUTHENTICATION
  signIn() {
    this.isOnline = true;
    return this.save();
  }
  signOut() {
    this.isOnline = false;
    return this.save();
  }
  // PROFILE EDIT
  changeAvatar(url) {
    this.avatar = url;
    return this.save();
  }
  updateProfile({ fname, lname, bio, location, website }) {
    this.fname = fname;
    this.lname = lname;
    this.location = location;
    this.website = website;
    this.skills = bio;
    return this.save();
  }
  
  //POST
  vpost(vpost) {
    this.vposts.push(vpost);
    return this.save();
  }

  async repost(originalPost) {
    const report = new VPost({ author: this, type: "repost" });
    repost.originalPost = originalPost;
    this.vposts.push(repost);
    originalPost.reposts.push(repost);
    await repost.save();
    await originalPost.save();
    await this.save();
  }

  deletePost(id) {
    this.vposts = this.vposts.filter(
      (vposts) => String(vposts._id) !== String(id)
    );
    return this.save();
  }

  editPost(vpost, body) {
    vpost.body = body;
    return vpost.save();
  }
  // POST COMMENT
  newReply(vpost, reply) {
    vpost.replies.unshift(reply);
    return vpost.save();
  }

  // POST LIKE
  like(vpost) {
    const didThisUserLiked = vpost.likes.find(
      (like) => like.username === this.username
    );
    if (didThisUserLiked) return;
    vpost.likes.push(this);
    return vpost.save();
  }
  unlike(vpost) {
    vpost.likes = vpost.likes.filter((like) => like.username !== this.username);
    return vpost.save();
  }
  
  
}

// Generates hash password on save.

profileSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

profileSchema.plugin(autopopulate);
profileSchema.loadClass(ProfileClass);

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;