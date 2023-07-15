import Fastify from "fastify";
import fastifyStatic from "@fastify/static";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const app = ({ port, rewrite, prefix }) => {
  const app = Fastify();
  let html = fs.readFileSync("../index.html", "utf-8")
  if (rewrite) html = rewrite(html);

  app.register(fastifyStatic, {
    root,
    wildcard: false,
    prefix,
    allowedPath: (path) => !["index.html", "/"].includes(path),
  });
  app.setNotFoundHandler((_, reply) => {
    reply.code(200).type("text/html").send(html);
  });
  app.listen({ port });
  console.log(`Browser Router: http://localhost:${port}`);
};

app({ port: 3000 });
app({ port: 3001, rewrite: (html) => html.replace("browserRouter: false,", "browserRouter: true,") });
app({ port: 3002, rewrite: (html) => html.replace('sitePath: "/"', 'sitePath: "/subdir/"'), prefix: "/subdir/" });
