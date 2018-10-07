$(document).ready(function(){
    $(document).on('click', '#menu .btn-primary', function(){

        let imgSrc = $(this).parents('.card').children('.card-img-top').attr('src');
        let foodTitle = $(this).parents('.card-body').children('.card-title').html();
        let foodDesc = $(this).parents('.card-body').children('.card-text').html();

        $('.modal img').attr('src', imgSrc);
        $('.modal-title').text(foodTitle);
        $('.modal-body p').text(foodDesc);
    });

    $(document).on('click', '#menu .btn-danger', function(){
        $(this).parents('.card').fadeOut();
    })
    
    $('#up-bar span').on('click', function() {

        let opcUser = $('#opc-user');

        opcUser.css('display') == 'block' ? opcUser.css({display: 'none'}) : opcUser.css({display: 'block'});

    });
});