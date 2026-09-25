import "./aConnection/EnvironmentConnection.js"
import { getEnv } from "./aConnection/EnvironmentConnection.js";

import http from "http";
import fs from "fs/promises";
import path from "path";


const ENV = getEnv.ENV;
const MACHINE = getEnv.MACHINE;
const PORT = getEnv.PORT;
const APP_NAME = getEnv.APP_NAME;

const init = () => {
  // Create node connection
  const nodeConnection = http.createServer(async (request, response) => {
    const url = request.url;

    switch (url) {

      // For index.html
      case "/":
        // Read index.html
        const indexHTML = await fs.readFile(
          path.join(process.cwd(), "public", "index.html"),
          "utf-8"
        )

        const updatedHTML = indexHTML
          .replace("{{ NODE_ENV }}", ENV)
          .replace("{{ NODE_MACHINE }}", MACHINE)
          .replace("{{ PORT }}", String(PORT))
          .replace("{{ NODE_APP_NAME }}", APP_NAME)

        // Response - write head
        response.writeHead(200, {
          "content-type": "text/html",
        });

        // Response - end
        response.end(updatedHTML);
        return;

      // For backend.png
      case "/backend.png":
        // Read backend.png
        const backendPNG = await fs.readFile(
          path.join(process.cwd(), "public", "backend.png"),
        )

        // Response - write head
        response.writeHead(200, {
          "content-type": "image/png",
        });

        // Response - end
        response.end(backendPNG);
        return;

      // For health
        // Response - write head
        response.writeHead(200);
        
        // Response - end
        response.end();

        return;

      // For not found
      default:
        // Response - write head
        response.writeHead(200, {
          "content-type": "text/plain",
        });

        // Response - end
        response.end("Page Not Found");
        return;
    }
  })

  // Listen node connection
  nodeConnection.listen(PORT, () => {
    console.log(`Node connection is listening on http://localhost:${PORT}`);
      console.log(`
        url: http://localhost:${PORT}
        PORT: ${PORT}
        APP_NAME: ${APP_NAME}
      `);
  })

}

init();``
