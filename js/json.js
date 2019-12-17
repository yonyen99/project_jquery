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

        //requesApi for url
    function requerstApi() {
        $.ajax({
            dataType: 'json',
            url: getUrl(),
            success: (data) => chooseRecipe(data.recipes),
            error: () => console.log('error'),
        })
    }
        //create array allData for using
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
    //function getRecipe
    function getRecipe(id) {
        allData.forEach(item => {
            if (item.id == id) {
                eachRecipe(item.name, item.iconUrl);
                ingredients(item.ingredients);
                eachGuest(item.nbGuests);
                instructions(item.instructions);

            }
        })
    }
    //
    function eachRecipe(name, img) {
        var result = "";
        result += `
        <div class ="col-4"></div>
        <div class ="col-4">
            <h1>${name}</h1> 
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
        var result_ingredients = "";
        ingredients.forEach(element => {
            result_ingredients += `
            <tr>
            <td><img src ="${element.iconUrl}" width ="40"></td>
            <td id ="quan">${element.quantity}</td>
            <td>${element.unit[0]}</td>
            <td>${element.name}</td>
            </tr>
            `;
        })
        $('#ingradient').html(result_ingredients);
    }
    //function instructions for loop step to output
    function instructions(step) {
        var getStep = "";
        var steps = step.split("<step>")
        for (let i = 1; i < steps.length; i++) {
            getStep += `
                <div class="col-4"></div>
                <div class="col-6">
                <h5>Step ${i}</h5>
                <p>${steps[i]}</p>
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
            mal(getValue);
        }
    }

    ///lowInput to minus number
    function lowInput(values) {
        var lowValue = parseInt(values) - 1;
        if (lowValue >= 0) {

            $('#value').val(lowValue);
            mal(lowValue);
        }
    }


