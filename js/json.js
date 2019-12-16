function getUrl() {
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}
$(document).ready(function () {
    requerstApi();
    $('#select').on('change', () => {
        var recipeId = $('#select').val();
        console.log(recipeId);
        getRecipe(recipeId);
    })
});

function requerstApi() {
    $.ajax({
        dataType: 'json',
        url: getUrl(),
        success: (data) => chooseRecipe(data.recipes),
        error: () => console.log('error'),
    })
}
var allData = [];
function chooseRecipe(recipe) {
    allData = recipe;
    var option = "";
    recipe.forEach(element => {
        option += `
            <option value="${element.id}">${element.name}</option>
        `;
    });
    $('#select').append(option);
}
function getRecipe(id) {
    allData.forEach(item => {
       
        if (item.id == id) {

            
            eachRecipe(item.name, item.iconUrl);
            ingredients(item.ingredients);
            instructions(item.instructions);
           
        }
    })
}
function eachRecipe(name, img) {
    var result = "";
    result += `
    <div class="col-4"></div>
    <div class="col-4">
    <h1>${name}</h1>
    <div class="col-4">
    <img src ="${img}" width ="100">
    </div>
    `;
    $('#recipe-results').html(result);
}

function ingredients(ingredients) {
    var result_ingredients = "";
    $('#h5').html("Ingredients");
    ingredients.forEach(element => {
        result_ingredients += `
       
        <tr>
        <td><img src ="${element.iconUrl}" width ="40"></td>
        <td>${element.quantity}</td>
        <td>${element.unit[0]}</td>
        <td>${element.name}</td>
        </tr>
        `;

    })

    $('#ingradient').html(result_ingredients);
}

function instructions(step){
    var getStep="";
    $("#Intorduction").html("Instructions");
    var steps=step.split("<step>")
    for(let i=1; i<steps.length; i++){
        getStep +=`
            <div class="col-4"></div>
            <div class="col-6">
            Step ${i}
            <p>${steps[i]}</p>
            </div>
       
            <div class="col-4"></div>
        `;
    }
    $("#step").html(getStep);
}