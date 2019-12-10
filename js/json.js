function getUrl(){
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}
$(document).ready(function () {
   requerstApi();
   $('#select').on('change',()=>{
       var recipeId = $('#select').val();
       console.log(recipeId);
       getRecipe(recipeId);
   })
});

function requerstApi(){
    $.ajax({
        dataType: 'json',
        url: getUrl(),
        success: (data) => chooseRecipe(data.recipes),
        error: () => console.log('error'),
    })
}
 var allData =[];
function chooseRecipe(recipe){
    allData = recipe;
    var option = "";
    recipe.forEach(element => {
        option +=`
            <option value="${element.id}">${element.name}</option>
        `;
    });
    $('#select').append(option);
}
function getRecipe(id){
    allData.forEach(item =>{
        console.log(item);
        if(item.id == id){
            eachRecipe(item.name,item.iconUrl);
            ///ingradient
            ///step....
        }
    })
}
function eachRecipe(name,img){
    var result ="";
    result +=`
    <h1>${name}</h1>
    <img src ="${img}" width ="100">
    `;
    $('#recipe-results').html(result);
}