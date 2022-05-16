const mongoose = require("mongoose");
const { Schema } = mongoose;

const pageSchema = new Schema({
  title: String,
  subTitle: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  body: {
    type: String,
  },
  published: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  image: { type: String, default: "" },
});

const Page = mongoose.model("page", pageSchema);

module.exports = Page;
