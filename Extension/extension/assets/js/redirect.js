redirect = {}
redirect.to_boards = function (boards) {
    board_list = ''
    $.each(boards, function( i, board ) {
        board_list += '<label class="btn btn-default" style="width:100%; padding-bottom: 5px">' + board.name + '</label>'
    });
    $('#trello_boards_container').html(board_list)
}

redirect.show_login = function () {
    $('#trello_login').fadeIn('fast');
}

redirect.show_trello_boards = function () {
    $('#trello_boards').fadeIn('fast');
}