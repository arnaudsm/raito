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
    reply.code(200).type("text/html").send(html);
  });
  app.listen({ port: 3001 });
};

const subdirServer = () => {
  const app = Fastify({ logger: true });
  let html = fs.readFileSync("../index.html", "utf-8")
    .replace('sitePath: "/"', 'sitePath: "/subdir/"')

  app.register(fastifyStatic, {
    root,
    wildcard: false,
    prefix: "/subdir/",
    allowedPath: (path) => !["/index.html", "/"].includes(path),
  });
  app.setNotFoundHandler((_, reply) => {
    reply.code(200).type("text/html").send(html);
  });
  app.listen({ port: 3002 });
};

starServer();
hashServer();
subdirServer();
