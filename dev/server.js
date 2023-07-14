import Fastify from "fastify";
import fastifyStatic from "@fastify/static";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const hashRouterApp = () => {
  const app = Fastify();
  app.register(fastifyStatic, { root });
  app.listen({ port: 3000 });
  console.log("Hash Router: http://localhost:3000");
}

const browserRouterApp = () => {
  const app = Fastify();
  let html = fs.readFileSync("../index.html", "utf-8")
    .replace("browserRouter: false,", "browserRouter: true,")

  app.register(fastifyStatic, {
    root,
    wildcard: false,
    allowedPath: (path) => !["index.html", "/"].includes(path),
  });
  app.setNotFoundHandler((_, reply) => {
    reply.code(200).type("text/html").send(html);
  });
  app.listen({ port: 3001 });
  console.log("Browser Router: http://localhost:3001");
};

const subdirApp = () => {
  const app = Fastify();
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
  console.log("Subdir: http://localhost:3002");
};

browserRouterApp();
hashRouterApp();
subdirApp();
