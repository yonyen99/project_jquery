// $(document).ready(function(){
//     var url ="https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
//     $.getJSON(
//         url,
//         function(data){
//           data.recipes.forEach(iterm=>{
//               console.log(iterm);
//           })
//         }
//     )
// })

$(document).ready(function () {
    $('#recipe').on('change', function () {
        var fruit = $('#recipe').val();
        choose(fruit);
    });
    requestApi();
});
var choose = (fruit) => {
    switch (parseInt(fruit)) {
        case 1:
            getApple();
            break;
        case 2:
            getBanana();
            break;
        case 3:
            getCoconut();
            break;
    }
}

var getBanana = () => {
    var banana = "banana";
    printOut(banana);
}
var getCoconut = () => {
    var coconut = "coconut";
    printOut(coconut);
}
var getApple = () => {
    var apple = "apple";
    printOut(apple);
}
var printOut = (out) => {
    $('#done').html(out);
}

//request api

var requestApi = () => {
    $.ajax({
        dataType: 'json',
        url: getUrl(),
        success: (data) => getRecipe(data),
        error: () => getError(),
    })
}
//get url
var getUrl = () => {
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}
//get error
var getError = () => console.log("Error");
//get recipe
var getRecipe = (myData) => {
    console.log(myData);
    myData.recipes.forEach(element => {
        //get recipe:element.name...
        getIngredient(element.ingredients);
    })
}
//get ingredient
var getIngredient = (ing) => {
    ing.forEach(item => {
        computeHTML(item);
    })
}
//compute to html
var computeHTML = (display) => {
    var compute = "";
    compute += `
       <tr>
        <td><img src ="${display.iconUrl}" width ="100px"></td>
        <td>${display.name}</td>
        <td>${display.quantity}</td>
        <td>${display.unit[0]}</td>
       </tr>
    `;
    printOut(compute);
}
//print out

printOut = (out) => {
    $('#ingredient').append(out);
}