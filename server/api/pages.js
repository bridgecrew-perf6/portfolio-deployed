const express = require("express");
const router = express.Router();

const Page = require("../models/Page");

const auth = require("../middlewares/auth");

router.post("/add", auth, async (req, res) => {
  try {
    console.log("page/add body is", req.body);

    const newPage = new Page(req.body);

    // const post = await newPage.save()
    const page = await newPage
      .save()
      .then((item) =>
        item.populate({ path: "owner", select: "username email image" })
      );

    if (!page) return res.send({ success: false, errorId: 2 });

    res.send({ success: true, page });
  } catch (error) {
    console.log("Pages add ERROR", error.message);
    res.send(error.message);
  }
});

router.get("/list",  async (req, res) => {
  try {
    const pages = await Page.find().limit(10).populate({
      path: "owner",
      select: "username age address image",
    });
    console.log('posts list', pages)
    res.send({success: true, pages});
  } catch (error) {
    console.log("Pages list ERROR", error.message);
    res.send(error.message);
  }
});

router.get('/single/:id', async (req, res) => {

  try {
      
      const pages = await Page.findOne({_id: req.params.id}).populate({
          path: 'owner',
          select: 'username age address image'
      })
      // console.log('posts list', posts)
      res.send({success: true, pages})
  } catch (error) {
      
      console.log('Posts list ERROR', error. message)
      res.send(error. message)
  }
})



// router.put("/likeadd/:postid/:userid", auth, async (req, res) => {
//   try {
//     console.log("likeadd post id is", req.params.postid);
//     console.log("likeadd user id is", req.params.userid);

//     const { userid, postid } = req.params;

//     // 1. get the post
//     const postToUpdate = await Post.findById(postid);
//     console.log("post to update BEFORE is", postToUpdate);

//     // 2. update the likes array

//     console.log("post to update is", postToUpdate);

//     const idx = postToUpdate.likes.findIndex((item) => item == userid);

//     console.log("idx IS", idx);
//     // check if user is in the likes array
//     if (idx > -1) {
//       // -1 means that user not found in the array
//       // if yes, then remove him
//       postToUpdate.likes.splice(idx, 1);
//     } else {
//       // if no then add him
//       postToUpdate.likes.push(userid);
//     }

//     // 3. update the post in the DB

//     // const post = await Post.findByIdAndUpdate(postid, postToUpdate)
//     const post = await postToUpdate.save();

//     console.log("post is", post);
//     res.send({ success: true, post });
//   } catch (error) {
//     console.log("Like add ERROR", error.message);
//     res.send(error.message);
//   }
// });

module.exports = router;
