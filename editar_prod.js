$(document).ready(function(){
    $(document).on('click', 'table tr', function(){
        let foodImage = $(this).attr('data-img-url');
        let foodMeta = [];
        $(this).children().each(function(){
            foodMeta.push($(this).html());
        });

        $("input[name='nombre']").val(foodMeta[0]);
        $("textarea[name='desc']").val(foodMeta[1]);
        $("input[name='precio']").val(foodMeta[2]);

        $(this).attr('data-checked') == "1" ? $('#modificable').prop("checked",true) : $('#modificable').prop("checked",false);

        $('#food_image').css({'background-image': `url('img/${foodImage}')`});  
    });
});