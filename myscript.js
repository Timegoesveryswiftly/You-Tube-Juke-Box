$(function(){
  // alert(953);

  $('#search').click(function() {
    var url = "https://www.googleapis.com/youtube/v3/search";
  //   var options = {
  // q: encodeURIComponent($('#q').val()),
  //     alt: "json",
  //     maxResults: 10,
  //     v: 2
  //   };

    // After the API loads, call a function to enable the search box.
    function handleAPILoaded() {
      $('#search').attr('disabled', false);
    }

    // Search for a specified string.
    function search() {
      // var q = $('#q').val();
      var request = gapi.client.youtube.search.list({
        q: encodeURIComponent($('#q').val()),
        // alt: "json",
        maxResults: 10,
        v: 3,
        // q: q,
        part: 'snippet'
      });

      $.getJSON(
          apiUrl,
          {},
          function(json) {
              if (!json.items) return;
              for(var i in json.items){
                  if (json.items[i].id.videoId && json.items[i].id.kind=="youtube#video"){
                      listVideo.push(json.items[i].id.videoId);
                  }
              }
          }
      );      // $.get(url, options, function(rs){
      //   console.log(rs);
      // }, "json");
      // request.execute(function(response) {
      //   var str = JSON.stringify(response.result);
      //   $('#search-container').html('<pre>' + str + '</pre>');
      // });
    }

  });
});
