  var userFeed = new Instafeed({
    get: 'user',
    userId: '5579681984',
    clientId: '6c1da4d4e7124243887a055f8d899a59',
    accessToken: '5579681984.6c1da4d.25216bfea1af4da790cea474c85c16ff',
    resolution: 'standard_resolution',
    template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
    sortBy: 'most-recent',
    limit: 4,
    filter: function(image) {
        var className = " four columns";

        if (count === 0) {
            className += " firstimg";
        }
        if (count === 4) {
            className += " lastimg";
        }
        image.customClassName = className;
        count++;
        return true;
    },
    links: false
  });
  userFeed.run();