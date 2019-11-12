const express = require("express");
const db = require("../models");

const router = express.Router();

router.post("/", async (req, res, next) => {
  // POST /api/post
  try {
    const newPost = await db.Post.create({
      content: req.body.content,
      UserId: req.user.id
    });
    const hashtags = req.body.content.match(/#[^\s]+/g);
    if (hashtags) {
      const result = await Promise.all(
        hashtags.map(tag => {
          const processedHashtag = tag.slice(1).toLowerCase();
          return db.Hashtag.findOrCreate({
            where: { name: processedHashtag }
          });
        })
      );
      await newPost.addHashtags(result.map(hashtag => hashtag[0]));
    }

    // 이런 방법이 있고
    // const User = await newPost.getUser()l 여기서 유저는 작성자 한명뿐
    // newPost.User = User;
    // res.json(newPost);

    const fullPost = await db.Post.findOne({
      where: { id: newPost.id },
      include: [
        {
          model: db.User,
          attributes: ["id", "nickname", "userId"]
        }
      ]
    });

    res.json(fullPost);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post("/imeage", (req, res) => {});

module.exports = router;
