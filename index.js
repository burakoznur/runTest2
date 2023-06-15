"use strict";
const port = process.env.PORT || 8080;
import Fastify from "fastify";

const fastify = Fastify({
  http2: true,
  logger: true,
});

fastify.get("/", function (request, reply) {
  reply.code(200).send({
    hello: "world",
    httpVersion: request.raw.httpVersion,
  });
});

fastify.listen({ port: port }, function (err, address) {
  console.log("err: ", err);
  console.log("port: ", address);
});
