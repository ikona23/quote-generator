function getQuote(){var e=$.ajax({url:"https://imtoobose-really-awful-poems-v1.p.mashape.com/poem",type:"GET",data:{},dataType:"json",success:function(e){document.getElementById("output").innerHTML=e.source,console.log(e);var t=e.poem,o=e.author},error:function(e){alert(e)},beforeSend:function(e){e.setRequestHeader("X-Mashape-Authorization","4X7dQjipLbmsh0NhnAussclyCq53p1lJEWCjsnAtOsLW035rJ7")}})}function testButton(){document.getElementById("button").innerHTML="This is THE qoute"}