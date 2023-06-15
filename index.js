const port = process.env.PORT || 3500;
const fs = require('fs')
const fastify = require('fastify')({
  http2: true,
  https: {
    key: fs.readFileSync('./localhost-privkey.pem'),
    cert: fs.readFileSync('./localhost-cert.pem')
  }
})

fastify.get('/', function (request, reply) {
  reply.code(200).send({ hello: 'world' })
});

fastify.post('/burak', function (request, reply) {
  console.log("burak");
  reply.code(200).send({ hello: 'world' })
});

fastify.listen({ port: port }, function(err, address){
  console.log("err: ", err);
  console.log("port: ", address);
})