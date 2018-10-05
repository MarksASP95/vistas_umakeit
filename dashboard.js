$(document).on('click', '#menu .btn-primary', function(){
    $('.modal-title').text($(this).prev().prev().html());
    $('.modal-body p').text($(this).prev().html())
    $('.modal img').attr('src',$(this).parent().prev().attr('src'));
});