  var userFeed = new Instafeed({
    get: 'user',
    userId: '7931234618',
    clientId: '1cf3a79ab8344fa1aff40ce6aab650d2',
    accessToken: '7931234618.1cf3a79.88a8cfa0ec0a4a048a3e9623f9ba2cc0',
    resolution: 'standard_resolution',
    template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
      after: function() {
        var url = $("#instafeed a:last").attr("href", "https://instagram.com/reveristvsreality");
        var url = $("#instafeed a:last").attr("title", "@reveristvsreality on Instagram");
      },
    sortBy: 'most-recent',
    limit: 4,
    links: false
  });
  userFeed.run();