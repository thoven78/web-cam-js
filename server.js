var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({
  port: 3000
});

server.route({
  method: 'GET',
  path: '/',
  handler: {
    file: 'index.html'
  }
});

server.route({
  method: 'GET',
  path: '/assets/{params*}',
  handler: {
    directory: {
      path: 'public'
    }
  }
});

server.route({
  method: 'POST',
  path: '/api/streaming/videos',
  handler: function(request, reply) {
    console.log(request.payload, 'woot');
    reply(request.payload);
  }
});

server.route({
  method: 'GET',
  path: '/server/info',
  handler: function(request, reply) {
    reply(server.info);
  }
});

// Start the serve
server.start(function() {
  console.log('Server running at:', server.info.uri);
});
