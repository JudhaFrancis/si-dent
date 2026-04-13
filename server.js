
const { createServer } = require("http");
const next = require("next");

const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    console.log(`[HTTP REQUEST] ${req.method} ${req.url}`);
    handle(req, res);
  }).listen(3000, () => {
    console.log("Server running on port 3000");
  });
}).catch((err) => {
  console.error("CRITICAL ERROR: Failed to prepare Next.js app");
  console.error(err);
  process.exit(1);
});
