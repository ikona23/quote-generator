document.addEventListener('DOMContentLoaded', init);

function init () {
  doIt();

}

function doIt() {
  var output = $.ajax({
      url: 'https://imtoobose-really-awful-poems-v1.p.mashape.com/poem', // The URL to the API. You can get this in the API page of the API you intend to consume
      type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
      data: {}, // Additional parameters here
      dataType: 'json',
      success: function(data) {
        var poem = data.poem;
        var author = data.author
      	document.getElementById("thePoem").innerHTML = '" '+ author + ' "' +"<br>" + "<br>" + '" ' + poem + '. "';
        console.log(data)
      },
    error: function(err) { console.log(err); },
      beforeSend: function(xhr) {   xhr.setRequestHeader("X-Mashape-Authorization","4X7dQjipLbmsh0NhnAussclyCq53p1lJEWCjsnAtOsLW035rJ7"); // Enter here your Mashape key
      }
  });
  }
