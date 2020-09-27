$(document).ready(function () {
    $("button").click(function () { 
 
        const name = $("input").val();
        
        $('.imgchange').attr('src',`https://joeschmoe.io/api/v1/${name}`);
        
    });
});

