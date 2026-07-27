process.env.NODE_ENV = process.env.NODE_ENV || "production";

import("./dist/server.js").catch((error) => {
  console.error("[APPLICATION STARTUP ERROR]", error);
  process.exit(1);
});
