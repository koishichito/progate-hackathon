import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import App from "../App.js";
import illust from "../image/照り焼き.png";
import "../index.css";

function Detail() {
  const recipe = {
    name: "鶏の照り焼き",
    image: illust,
    ingredients: [
      "鶏もも肉 400g",
      "醤油 大さじ2",
      "みりん 大さじ2",
      "酒 大さじ1",
      "砂糖 大さじ1",
    ],
    tags: ["和食", "メイン", "簡単"],
    steps: [
      "鶏肉を一口大に切ります。",
      "醤油、みりん、酒、砂糖を混ぜて調味料を作ります。",
      "フライパンで鶏肉を両面焼きます。",
      "調味料を加え、煮詰めながら照りを出します。",
      "鶏肉に味がなじんだら完成です。",
    ],
  };

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
                    <li key={index}>{ingredient}</li>
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
                      <span className="font-medium text-blue-900">
                        手順 {index + 1}:
                      </span>{" "}
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
