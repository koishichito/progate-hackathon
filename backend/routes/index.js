// recipe-search-backend/routes/index.js

const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');     // models/recipe.jsを参照
const { Op } = require('sequelize');

// 検索エンドポイント
router.get('/search', async (req, res) => {
  const { query, tags } = req.query;

  let whereClause = {};

  if (query) {
    whereClause.name = { [Op.like]: `%${query}%` };
  }

  if (tags) {
    const tagArray = tags.split(',').map((tag) => tag.trim());
    whereClause.tags = {
      [Op.and]: tagArray.map((tag) => ({
        [Op.like]: `%${tag}%`,
      })),
    };
  }

  try {
    const recipes = await Recipe.findAll({ where: whereClause });
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
