$(document).on('click', '#menu .btn-primary', function(){
    $('.modal-title').text($(this).prev().prev().html());
    $('.modal-body p').text($(this).prev().html())
});