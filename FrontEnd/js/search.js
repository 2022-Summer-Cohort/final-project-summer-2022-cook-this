// const recipe = [
//     {title : 'italian'},
//     {title : 'chocalate1'},
//     {title : 'mediterranean'},
//     {title : 'stinky'},
//     {title : 'binky'},
//     {title : 'medicine'},
//     {title : 'pie'},
// ];
const list = document.getElementById('list');
 function setList(group){
     clearList();
     for(const recipe of group){
        const item = document.createElement('li');
        item.classList.add('list-group-item');
        const text = document.createTextNode(recipe.title);
        item.appendChild(text);
        list.appendChild(item);
     }
     
     if (group.length ===0){
        setNoResult();
     }
 }
 function clearList() {
    while(list.firstChild){
        list.removeChild(list.firstChild);

    }
 }
 function setNoResult(){
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    const text = document.createTextNode(recipe.title);
    item.appendChild(text);
    list.appendChilda(item);
 }

 function getRelevancy(value, searchTerm){
    if (value === searchTerm){
        return 3;
    }else if(value.startWith(term)){
        return 3;
    }else if(value.includes(searchTerm)){
        return 0;
    }else {
        return -1;
    }
 }

const searchIN = document.getElementById('search777');

searchIN.addEventListener('input', (event) => {
    let value = event.target.value;
    if (value && value.trim().length > 0){
        value = value.trim().toLowerCase();
        setList(recipe.filter(recipe => {
            return recipe.title.includes(value);
        }).sort((recipeA,recipeB) => {
            return getRelevancy(recipeB.name,value) - getRelevancy(recipeA.name,value);
        })); 
    }else {
        clearList();
    }
});

searchIN.addEventListener("focusout",function (){
clearList();
})


