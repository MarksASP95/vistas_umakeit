$(document).ready(function(){
    $(document).on('click', '#menu .btn-primary', function(){
        $('.modal-title').text($(this).prev().prev().html());
        $('.modal-body p').text($(this).prev().html())
        $('.modal img').attr('src',$(this).parent().prev().attr('src'));
    });
    
    $('#up-bar span').on('click', function() {
        if($('#opc-user').css('opacity') == 1){
            console.log(1);
            $('#opc-user').animate({opacity: 1}, 1000);
        }
        else{
            console.log(0);
            $('#opc-user').animate({opacity: 1}, 1000);
        }
    });
});