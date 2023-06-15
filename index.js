const port = process.env.PORT || 3000;
import Fastify from 'fastify';

const fastify = Fastify({
  http2: true,
  logger: true,
})

fastify.get('/', function (request, reply) {
  reply.code(200).send({ hello: 'world' })
});

fastify.listen({ port: port }, function(err, address){
  console.log("err: ", err);
  console.log("port: ", address);
})