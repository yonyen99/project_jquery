$(document).ready(function () {
    //change function
    $('#recipe').on('change', function () {
        var fruit = $('#recipe').val();
        // console.log(fruit);
        choose(fruit);
    });
    //add function to calulate number
    $('#add').on('click', function(){
        var input = $('#value').val();
        userInput(input);
        
    })
    //low function to calulate number
    $('#low').on('click', function(){
        var input = $('#value').val();
        lowInput(input);
    })

});

//function userinput
function userInput(values){
    var getValue = parseInt(values) + 1;
    if(getValue <= 15){
       $('#value').val(getValue);    
       mal(getValue);
    }
}
//fucntion lowInput 
function lowInput(values){
    var lowValue = parseInt(values) - 1;
    if(lowValue >= 0  ){

    $('#value').val(lowValue);
    mal(lowValue);
    } 
}
//mal function to calulate
function mal(mal) {
    var mals = mal * 5;
    output(mals);
    if (mals == 0) {
        progres(mals);
    } else {
        progres(mals + 25);
    }
}
//function output
function output(out) {
    $('#result').html(out);
}
//show function progres
function progres(pro) {
    $('#p_bar').width(pro + "%");
    $('#p_bar').html(pro + "%");
}
//choose function
function choose(data) {
    switch (parseInt(data)) {
        case 1:
            avokado();
            break;

        case 2:
            frence();
            break;
    }
}
//avokadio
function avokado() {
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    $.ajax({
        dataType: 'json',
        url: url,
        success: function (data) {
            var results = "";
            data.recipes.forEach(el => {
                if (el.id == 0) {

                    results += `
                    <div class="col-3"></div>
                    <div class="col-3"> <h4>${el.name}</h4>  </div>
                    <div class="col-3">  <img src= "${el.iconUrl}" width="100px"></div>
                    <div class="col-3"></div>
                    `;
                }
            })
            $('#card').html(results);

            var ingredient = "";
            data.recipes.forEach(ing => {
                ing.ingredients.forEach(item => {
                    if (ing.id == 0) {
                        ingredient += `
                       
                        <tr>
                        <td><img src="${item.iconUrl}" width="50px"></td>
                        <td>${item.quantity}</td>
                        <td>${item.unit[0].toLowerCase()}</td>
                        <td>${item.name}</td>
                        </tr>
                     `;
                    }
                })
            })
            $('#table').html(ingredient);
        }
    })
}
// frence crip
function frence() {
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    $.ajax({
        dataType: 'json',
        url: url,
        success: function (data) {
            var result = "";
            data.recipes.forEach(el => {
                if (el.id == 1) {

                    result += `
                        
                        <div class="col-3"></div>
                        <div class="col-3"> <h4>${el.name}</h4>  </div>
                        <div class="col-3">  <img src= "${el.iconUrl}" width="100px"></div>
                        <div class="col-3"></div>
                    `;
                }
            })
            $('#card').html(result);

            var ingredient = "";
            data.recipes.forEach(ing => {
                ing.ingredients.forEach(item => {
                    if (ing.id == 1) {
                        ingredient += `
                        <tr>
                        <td><img src="${item.iconUrl}" width="50px"></td>
                        <td>${item.quantity}</td>
                        <td>${item.unit[0].toLowerCase()}</td>
                        <td>${item.name}</td>
                        </tr>
                     `;
                    }
                })
            })
            $('#table').html(ingredient);
        }
    })
}