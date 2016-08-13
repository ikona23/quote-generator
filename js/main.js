// make connection
function getQuote() {
  var output = $.ajax({
      url: 'https://imtoobose-really-awful-poems-v1.p.mashape.com/poem', // The URL to the API. You can get this in the API page of the API you intend to consume
      type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
      data: {}, // Additional parameters here
      dataType: 'json',
      success: function(data) {
      	document.getElementById("output").innerHTML = data.source;
        console.log(data)
        var poem = data.poem;
        var author = data.author;
      },
    error: function(err) { alert(err); },
      beforeSend: function(xhr) {   xhr.setRequestHeader("X-Mashape-Authorization","4X7dQjipLbmsh0NhnAussclyCq53p1lJEWCjsnAtOsLW035rJ7"); // Enter here your Mashape key
      }
  });
  }

function testButton() {
    document.getElementById("button").innerHTML = "This is THE qoute";
}
