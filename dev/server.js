import Fastify from "fastify";
import fastifyStatic from "@fastify/static";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const hashServer = () => {
  const app = Fastify({ logger: true });
  app.register(fastifyStatic, { root });
  app.listen({ port: 3000 });
}

const starServer = () => {
  const app = Fastify({ logger: true });
  let html = fs.readFileSync("../index.html", "utf-8")
    .replace("hashRouting: true,", "hashRouting: false,")

  app.register(fastifyStatic, {
    root,
    wildcard: false,
    allowedPath: (path) => !["index.html", "/"].includes(path),
  });
  app.setNotFoundHandler((_, reply) => {
    reply.code(404).type("text/html").send(html);
  });
  app.listen({ port: 3001 });
};

// Raito supports hash routing and star routing, we will test both
hashServer();
starServer();
