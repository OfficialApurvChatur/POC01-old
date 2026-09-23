import dotenv from "dotenv";


class EnvironmentConnection {
  private connection = dotenv.config();

  private ENV = "development";
  private MACHINE = "local";
  private PORT = 8000;
  private APP_NAME = "POC01-ReactNodeSetup";
  private BACKEND_URL = "http://localhost:8000";
  private FRONTEND_URL = "http://localhost:3000";

  constructor() {
    let path = ".env";

    if (this.connection.parsed?.NODE_MACHINE === "local") {
      path = this.connectFolder(path)
    }

    this.setEnv();

    console.log(`Environment connection created successfully...`)
    console.log(`
      path: ${path}
      ENV: ${this.getEnv().ENV}
      MACHINE: ${this.getEnv().MACHINE}
      PORT: ${this.getEnv().PORT}
      APP_NAME: ${this.getEnv().APP_NAME}
    `)
  }

  private connectFolder(path: string) {
    path = `./env/.env.${this.connection.parsed?.NODE_ENV}`
    dotenv.config({
      path
    })
    return path
  }

  private setEnv() {
    this.ENV = String(process.env.NODE_ENV || this.ENV);
    this.MACHINE = String(process.env.NODE_MACHINE || this.MACHINE);
    this.PORT = Number(process.env.NODE_PORT || this.PORT);
    this.APP_NAME = String(process.env.NODE_APP_NAME || this.APP_NAME);
    this.BACKEND_URL = String(process.env.BACKEND_URL || this.BACKEND_URL);
    this.FRONTEND_URL = String(process.env.FRONTEND_URL || this.FRONTEND_URL);
  }

  public getEnv() {
    return {
      ENV: this.ENV,
      MACHINE: this.MACHINE,
      PORT: this.PORT,
      APP_NAME: this.APP_NAME,
      BACKEND_URL: this.BACKEND_URL,
      FRONTEND_URL: this.FRONTEND_URL,
    }
  }
}

const environmentConnection = new EnvironmentConnection;
export default environmentConnection;
export const getEnv = environmentConnection.getEnv();

