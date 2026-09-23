import dotenv from "dotenv";


class EnvironmentConnection {
  private connection = dotenv.config();

  private ENV = "development";
  private MACHINE = "local";
  private PORT = 8000;
  private APP_NAME = "POC01-ReactNodeSetup";

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
    this.PORT = Number(process.env.PORT || this.PORT);
    this.APP_NAME = String(process.env.NODE_APP_NAME || this.APP_NAME);
  }

  public getEnv() {
    return {
      ENV: this.ENV,
      MACHINE: this.MACHINE,
      PORT: this.PORT,
      APP_NAME: this.APP_NAME
    }
  }
}

const environmentConnection = new EnvironmentConnection;
export default environmentConnection;
export const getEnv = environmentConnection.getEnv();

