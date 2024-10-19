// import {typeMenuList} from "../data/ryouri";

// type Props = {
//     menus:typeMenuList,
//     taste:"sweet"|"spicy"|"light"|"rich"|null,
//     isCheap: boolean|null,
//     isShort: boolean|null,
//     isEasy: boolean|null
// }

export const cookingFilter = ({menus,taste, isCheap, isShort, isEasy}) => {
    let filteredMenus
    filteredMenus=filterTaste(menus,taste)
    filteredMenus=toFilterList(filteredMenus,isCheap,"isCheap")
    filteredMenus=toFilterList(filteredMenus,isShort,"isShort")
    return toFilterList(filteredMenus,isEasy,"isEasy")
}

const filterTaste=(menus,value)=>{
    return value===null?menus:menus.filter(menu=>menu.taste===value)
}

const toFilterList=(cookingList,value,listItem)=>{
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