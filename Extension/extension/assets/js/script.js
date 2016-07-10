$(document).ready(function () {
    if (storage.api_key() == null) {
        redirect.show_login();
        api.create_api_key();
    } else {
        if (api.validate_api_key()) {
            if (storage.trello_token() != null){
                var boards = api.trello.boards();
                if (!boards) {
                    notification.api_token_verification_failed();
                } else {
                    notification.api_token_verified();
                    redirect.to_boards(boards);
                    redirect.show_trello_boards();
                }
            } else {
                redirect.show_login();
            }
        } else {
            redirect.show_login();
            notification.api_token_verification_failed();

        }
    }

    //TRELLO LOGIN
    $('#btn_trello_login').click(function () {
        api.trello.authenticate();
    });

    $("#txt_trello_token").bind('paste', function () {
        notification.api_token_created();
        show_loader('trello_login')
        setTimeout(function () {
            storage.set_trello_token($("#txt_trello_token").val())
            redirect.to_boards(api.trello.boards())
            setTimeout(function () {
                hide_loader('trello_boards')
            }, 100);
        }, 100);
    });

    function show_loader(page_to_hide) {
        $('#' + page_to_hide).fadeOut('fast', function () {
            $('#loader').fadeIn('fast', function () {
                return
            })
        })
    }

    function hide_loader(page_to_show) {
        $('#loader').fadeOut('fast', function () {
            $('#' + page_to_show).fadeIn('fast', function () {
                return
            })
        })
    }

});




