//--------------------------------------------------------------------------------------------------------------------\\
api = {};

api.create_api_key = function () {
    var defer_call = $.ajax({
        url: 'http://chronos-ergo.herokuapp.com/api/v1/connect',
        async: false
    });
    storage.set_api_key(defer_call.responseText);
};
api.validate_api_key = function () {
    var defer_call = $.ajax({
        url: 'http://chronos-ergo.herokuapp.com/api/v1/' + storage.api_key() + '/connect',
        async: false
    });

    return (storage.api_key() == defer_call.responseText)
};
//--------------------------------------------------------------------------------------------------------------------\\
api.trello = {};
api.trello.app_id = '1ce0fe1724ea087a1df9784aa81e42ff';

api.trello.authenticate = function () {
    chrome.tabs.create({url: 'https://trello.com/1/connect?expiration=never&key=' + api.trello.app_id + '&name=Bitcube%20Chronos%20Ergo&response_type=token'});
};

api.trello.boards = function () {
    var defer_call = $.ajax({
        url: 'https://api.trello.com/1/members/me/boards?key=' + api.trello.app_id + '&fields=id,name&token=' + storage.trello_token(),
        async: false
    });

    return defer_call.responseJSON == undefined || defer_call.responseJSON == null ? false : defer_call.responseJSON
};