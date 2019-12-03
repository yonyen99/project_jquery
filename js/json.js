$(document).ready(function(){
    var url ="https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";

    $.getJSON(
        url,
        function(data){
          data.recipes.forEach(iterm=>{
              console.log(iterm);
          })
        }
    )

})
