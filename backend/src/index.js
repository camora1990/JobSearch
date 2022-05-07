const Server = require("./bootstrap/Server");

const server = new Server();

(async function initServer() {
  try {
    await server.initServer();
  } catch (error) {
    console.log(error);
  }
})();
