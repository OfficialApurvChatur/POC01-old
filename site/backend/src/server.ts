import http from "http";
import fs from "fs/promises";
import path from "path";


const PORT = process.env.PORT || 8000;

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

        // Response - write head
        response.writeHead(200, {
          "content-type": "text/html",
        });

        // Response - end
        response.end(indexHTML);
        break;

      // For backend.png
      case "/backend.png":
        // Read backend.png
        const backendPNG = await fs.readFile(
          path.join(process.cwd(), "public", "backend.png"),
          "utf-8"
        )

        // Response - write head
        response.writeHead(200, {
          "content-type": "image/png",
        });

        // Response - end
        response.end(backendPNG);
        break;

      // For not found
      default:
        // Response - write head
        response.writeHead(200, {
          "content-type": "text/plain",
        });

        // Response - end
        response.end("Page Not Found");
        break;
    }
  })

  // Listen node connection
  nodeConnection.listen(PORT, () => {
    console.log(`Node connection is litenning on http://localhost:${PORT}`)
  })

}

init();``
