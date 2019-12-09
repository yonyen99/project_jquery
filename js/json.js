$(document).ready(function () {
    $('#recipe').on('change', function () {
        var fruit = $('#recipe').val();
        // console.log(fruit);
        choose(fruit);
    });
});
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
            // $('#ingredient').hmtl("Ingredient");
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