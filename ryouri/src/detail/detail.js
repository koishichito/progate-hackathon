import { useParams } from "react-router-dom";
import illust from "../image/照り焼き.png";

function Detail() {
  const { id } = useParams();
  const recipeId = parseInt(id, 10); // idを整数に変換

  const recipes = [
    {
      id: 1,
      name: "鶏の照り焼き",
      taste: "light",
      isCheap: true,
      isShort: true,
      isEasy: true,
      image: illust,
      ingredients: [
        { name: "鶏もも肉", amount: "400g" },
        { name: "醤油", amount: "大さじ2" },
        { name: "みりん", amount: "大さじ2" },
        { name: "酒", amount: "大さじ1" },
        { name: "砂糖", amount: "大さじ1" },
      ],
      tags: ["和食", "メイン", "簡単"],
      steps: [
        "鶏肉を一口大に切ります。",
        "醤油、みりん、酒、砂糖を混ぜて調味料を作ります。",
        "フライパンで鶏肉を両面焼きます。",
        "調味料を加え、煮詰めながら照りを出します。",
        "鶏肉に味がなじんだら完成です。",
      ],
    },
    {
      id: 2,
      name: "ハンバーグ",
      taste: "rich",
      isCheap: true,
      isShort: false,
      isEasy: true,
      image: illust,
      ingredients: [
        { name: "牛ひき肉", amount: "300g" },
        { name: "玉ねぎ", amount: "1個" },
        { name: "パン粉", amount: "1/2カップ" },
        { name: "牛乳", amount: "大さじ2" },
        { name: "卵", amount: "1個" },
        { name: "塩", amount: "小さじ1/2" },
        { name: "コショウ", amount: "少々" },
      ],
      tags: ["洋食", "メイン", "簡単"],
      steps: [
        "玉ねぎをみじん切りにして、炒めて冷まします。",
        "ボウルにひき肉、玉ねぎ、パン粉、牛乳、卵、塩、コショウを入れて混ぜます。",
        "混ぜたタネを手で形を整えて、フライパンで焼きます。",
        "両面に焼き色がついたら、蓋をして弱火で火を通します。",
        "ソースをかけて完成です。",
      ],
    },
  ];

  // recipeIdに基づいてレシピを取得
  const recipe = recipes.find((r) => r.id === recipeId);

  if (!recipe) {
    return <div>Recipe not found</div>; // recipeがない場合の表示
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.name}
            width={1200}
            height={600}
            className="w-full h-64 object-contain"
          />
          <div className="bg-amber-100 p-6">
            <h1 className="text-3xl font-bold text-amber-800 mb-2">
              {recipe.name}
            </h1>
            <div className="flex flex-wrap gap-2">
              {recipe.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-amber-500 text-white px-2 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-green-800">
                  材料
                </h2>
                <ul className="list-disc list-inside space-y-2 text-green-700">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li
                      key={index}
                    >{`${ingredient.name}: ${ingredient.amount}`}</li> // nameとamountをフォーマット
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                  作り方
                </h2>
                <ol className="list-decimal list-inside space-y-4 text-blue-700">
                  {recipe.steps.map((step, index) => (
                    <li key={index} className="pl-2">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
