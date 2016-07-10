storage = {};
storage.api_key = function () {
    if (localStorage.getItem('api_key') == null || localStorage.getItem('api_key') == '') {
        return null;
    } else {
        return localStorage.getItem('api_key');
    }
};

storage.set_api_key = function (api_key) {
    localStorage.setItem('api_key', api_key);
};


//--------------------------------------------------------------------------------------------------------------------\\

storage.trello_token = function () {
    if (localStorage.getItem('trello_token') == null || localStorage.getItem('trello_token') == '') {
        return null;
    } else {
        return localStorage.getItem('trello_token');
    }
};

storage.set_trello_token = function (trello_token) {
    localStorage.setItem('trello_token', trello_token);
};