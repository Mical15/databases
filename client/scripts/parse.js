var Parse = {

  server: 'localhost:3000',

  create: function(message, successCB, errorCB = null) {

    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function (error) {
        console.error('chatterbox: Failed to create message', error);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server + '/classes/messages',
      type: 'GET',
      contentType: 'application/json',
      headers: { 'Access-Control-Allow-Origin': 'localhost:3000' },
      success: successCB,
      crossDomain: true,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};

console.log(Parse.server);

//   data: { order: '-createdAt' },