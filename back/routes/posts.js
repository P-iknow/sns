const express = require('express');
const db = require('../models');

const router = express.Router();

router.get('/', async (res, req, next) => {
  // GET /api/posts
  try {
    const posts = await db.Post.findAll({
      include: [
        {
          model: db.User,
          attributes: ['id', 'nickname']
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
