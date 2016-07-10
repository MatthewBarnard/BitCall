notification = {};
notification.api_token_verified = function () {
    $('#notification_panel').slideDown('fast', function () {
        $('#successful_api_key_validation').fadeIn('fast', function () {
            setTimeout(function () {
                $('#successful_api_key_validation').fadeOut('fast', function () {
                    $('#notification_panel').slideUp('fast');
                })
            }, 2000);
        })
    })
};

notification.api_token_verification_failed = function () {
    $('#notification_panel').slideDown('fast', function () {
        $('#failed_api_key_validation').fadeIn('fast', function () {
            setTimeout(function () {
                $('#failed_api_key_validation').fadeOut('fast', function () {
                    $('#notification_panel').slideUp('fast');
                })
            }, 2000);
        })
    })
};

notification.api_token_created = function () {
    $('#notification_panel').slideDown('fast', function () {
        $('#new_api_key_validation').fadeIn('fast', function () {
            setTimeout(function () {
                $('#new_api_key_validation').fadeOut('fast', function () {
                    $('#notification_panel').slideUp('fast')
                })
            }, 2000);
        });
    });
};