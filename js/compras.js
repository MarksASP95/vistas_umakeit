$(document).on('click', '#history tbody tr', function(){

    let row = $(this).children('td');
    let list = row.children('td ul');

    let checkHtmlStr = "<input type=\"checkbox\" checked></input>"

    let table = $("<table class=\"table\"><thead><th>Producto</th><th>Mantener</th></thead></table>");
    let tbody = $("<tbody></tbody>");

    list.children('li').each(function(i){
        tbody.append(`<tr><td>${$(this).html()}</td><td>${checkHtmlStr}</td></tr>`)
    });

    table.append(tbody);

    $('.modal-body').html('<p>Marca los elementos que quieres volver a comprar. <strong>Esto no afectará a tu carrito.</strong></p>').append(table);
    $('.modal-title').html("Recomprar");

    $('#exampleModal').modal();
});