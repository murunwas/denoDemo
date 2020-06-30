import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello world!";
});

console.log("Server running on port: 8080");
await app.listen({ port: 8080 });

