$(document).ready(function(){
    $(document).on('click', '#menu .btn-primary', function(){

        let imgSrc = $(this).parent().prev().attr('src');
        let foodTitle = $(this).prevAll(':eq(1)').html();
        let foodDesc = $(this).prev().html();

        $('.modal img').attr('src', imgSrc);
        $('.modal-title').text(foodTitle);
        $('.modal-body p').text(foodDesc);
    });
    
    $('#up-bar span').on('click', function() {

        let opcUser = $('#opc-user');

        opcUser.css('display') == 'block' ? opcUser.css({display: 'none'}) : opcUser.css({display: 'block'});

    });
});