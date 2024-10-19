// recipe-search-backend/index.js
// recipe-search-backend/index.js の最初に追加
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection:', reason);
  });
  
  process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
  });  

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes');             // routes/index.jsを参照

const sequelize = require('./models');          // models/index.jsを参照
const Recipe = require('./models/recipe');      // models/recipe.jsを参照

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001']
}));
app.use(bodyParser.json());
app.use('/', routes);

// データベースの同期とサーバーの起動
sequelize.sync({ force: true }).then(async () => {
  // 初期データの投入
  await Recipe.bulkCreate([
    { name: 'カレーライス', tags: '辛い,すぐ作れる' },
    { name: '親子丼', tags: '安い,すぐ作れる' },
    { name: '麻婆豆腐', tags: '辛い,安い' },
    // 他のレシピデータを追加可能
  ]);
  console.log('Database & tables created!');

  // サーバーの起動
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
