// import {menuList} from "../data/ryouri";

export const search=(searchWord)=>{
    const menus=menuList
    if(!searchWord){
        return menus
    }
    const changedWord=hiraToKana(searchWord)

    return menus.filter((menu)=>hiraToKana(menu.name).includes(changedWord)||menu.ingredients.find((ingredient)=>ingredient.name.includes(searchWord)))
}

function hiraToKana(word){
    return word.replace(/[\u30a1-\u30f6]/g,function (match){
        const chr=match.charCodeAt(0) - 0x60;
        return String.fromCharCode(chr);
    }).toLowerCase()
}

//get text
//compare with all name
//return array

//
//
//始めの画面での検索

//検索してmenuList画面に移動
//get information
//request information   (use api)
//return information
//redirect result
