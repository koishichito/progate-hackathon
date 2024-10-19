// import {typeMenuList} from "../data/ryouri";

// type Props = {
//     menus:typeMenuList,
//     taste:"sweet"|"spicy"|"light"|"rich"|null,
//     isCheap: boolean|null,
//     isShort: boolean|null,
//     isEasy: boolean|null
//     mealType:"staple"|"main"|"side"|"soup"|null
//     cuisine:"japanese"|"western"|"chinese"|"italian"|null
// }

export const menuFilter = (menus,taste,isCheap,isShort,isEasy,mealType,cuisine) => {
    let filteredMenus=menus
    console.log(filteredMenus)
    filteredMenus=filterTaste(menus,taste)
    filteredMenus=filterMenus(filteredMenus,isCheap,"isCheap")
    filteredMenus=filterMenus(filteredMenus,isShort,"isShort")
    filteredMenus=filterMenus(filteredMenus,isEasy,"isEasy")
    filteredMenus=filterMealType(filteredMenus,mealType)
    return filterCuisine(filteredMenus,cuisine)
}


const filterFourChoices=(menus,item,value)=>{
    return value===null?menus:menus.filter(menu=>menu[item]===value)
}

const filterMealType=(menus,value)=>{
    return value===null?menus:menus.filter(menu=>menu.mealType===value)
}
const filterTaste=(menus,value)=>{
    return value===null?menus:menus.filter(menu=>menu.taste===value)
}
const filterCuisine=(menus,value)=>{
    return value===null?menus:menus.filter(menu=>menu.cuisine===value)
}

const filterMenus=(cookingList,value,listItem)=>{
    if (value===null){
        return cookingList
    }
    if(value){
        return cookingList.filter((list)=>list[listItem])
    }else{
        return cookingList.filter((list)=>!list[listItem])
    }
}

//const x={sweet:true,taste:false,time:"short"}があったら
//console.log(x[time]);  //"short"  console.log(x[sweet])  //true
//プロパティの値を参照できる
//list get
//filter
//list を下に向かって作るイメージ