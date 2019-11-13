const express = require("express");
const db = require("../models");

const router = express.Router();

router.get("/:tag", async (req, res, next) => {
  // 한글이나 특수문자 등이 url 에 포함되는 경우
  const tag = decodeURIComponent(req.params.tag);

  try {
    const posts = await db.Post.findAll({
      // 보통 where 가 이 부분에 들어가는데 여기서는
      // post의 조건이 아니라 hash 태그의 조건을 찾기 때문에
      include: [
        {
          model: db.Hashtag,
          // 이 부분에 적어준다
          where: { name: tag }
        },
        {
          model: db.User,
          attribute: ["id", "nickName"]
        }
      ]
    });
    res.json(posts);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
