//function to get url from api
function getUrl() {
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}
//start jquery with $(document) function
$(document).ready(function () {
    $('#line').hide(); // hide line
    requerstApi();
    $('#select').on('change', () => {
        var recipeId = $('#select').val();
        getRecipe(recipeId);
        $('#line').show();
    })
    //add to number to click function
    $('#add').on('click', function () {
        var input = $('#value').val();
        userInput(input);
    })
    //low to minus function
    $('#low').on('click', function () {
        var input = $('#value').val();
        lowInput(input);
    })
});
//requetsApi for url
function requerstApi() {
    $.ajax({
        dataType: 'json',
        url: getUrl(),
        success: (data) => chooseRecipe(data.recipes),
        error: () => console.log('error'),
    })
}
//create array allData for using to get element of recipe
var allData = [];
//fucntion chooseRecipe 
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
//variable oldgest to 
var oldgest;
//variable newQualitie to 
var newQualitie = [];
//function getRecipe
function getRecipe(id) {
    allData.forEach(item => {
        if (item.id == id) {
            eachRecipe(item.name, item.iconUrl);
            ingredients(item.ingredients);
            eachGuest(item.nbGuests);
            instructions(item.instructions);
            oldgest = item.nbGuests;
            newQualitie = item.ingredients;
        }
    })
}
//function to get name and iconUrl from api
function eachRecipe(name, img) {
    var result = "";
    result += `
        <div class ="col-4"></div>
        <div class ="col-4">
            <h1 class ="text-info">${name}</h1> 
        </div>
        <div class ="col-4">
        <img src ="${img}" width ="100">
        </div>
        `;
    $('#recipe-results').html(result);
}
//hide before see 
$('#show').hide();
//function eachGuest to get data from api
function eachGuest(guest) {
    var result = "";
    result += `
            <input type="text" id="value" class="form-control text-center" disabled value="${guest}">
        `;
    $('#values').html(result);
    //show after
    $('#show').show();
}
//function ingredients to get data from ingredients
function ingredients(ingredients) {
    $('#ingradienttitle').html('Ingredients');
    var result_ingredients = "";
    ingredients.forEach(element => {
        result_ingredients += `
            <tr>
            <td><img src ="${element.iconUrl}" width ="40"></td>
            <td id ="quan">${element.quantity}</td>
            <td class ="text-success">${element.unit[0]}</td>
            <td  class ="text-warning">${element.name}</td>
            </tr>
            `;
    })
    $('#ingradient').html(result_ingredients);
}
//function instructions for loop step to output
function instructions(step) {
    $('#introduction').html('Instructions');
    var getStep = "";
    var steps = step.split("<step>")
    for (let i = 1; i < steps.length; i++) {
        getStep += `
                <div class="col-4"></div>
                <div class="col-6">
                <h5  class ="text-success">Step ${i}</h5>
                <p class ="text-info">${steps[i]}</p>
                </div>
                <div class="col-4"></div>
            `;
    }
    $("#step").html(getStep);
}
///userInput to add number
function userInput(values) {
    var getValue = parseInt(values) + 1;
    if (getValue <= 15) {
        $('#value').val(getValue);
        // mal(getValue);
        newGuest($('#value').val());
    }
}
///lowInput to minus number
function lowInput(values) {
    var lowValue = parseInt(values) - 1;
    if (lowValue >= 1) {
        $('#value').val(lowValue);
        // mal(lowValue);
        newGuest($('#value').val());
    }
}
//newGuest function to calulate number
function newGuest(getgest) {
    var result_ingredients = "";
    newQualitie.forEach(element => {
        const { name, quantity, unit, iconUrl } = element;
        result_ingredients += `
            <tr>
            <td><img src ="${iconUrl}" width ="40"></td>
            <td id ="quan"  class ="text-info">${quantity / oldgest * getgest}</td>
            <td  class ="text-warning">${unit[0]}</td>
            <td  class ="text-success">${name}</td>
            </tr>
            `;
    });
    $('#ingradient').html(result_ingredients);
}