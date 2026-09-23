class EnvironmentConnection {
  private ENV = "development";
  private MACHINE = "local";
  private PORT = 3000;
  private APP_NAME = "POC01-ReactNodeSetup";

  constructor() {
    this.setEnv();
  }

  private setEnv() {
    this.ENV = import.meta.env.VITE_ENV;
    this.MACHINE = import.meta.env.VITE_MACHINE;
    this.PORT = import.meta.env.VITE_PORT;
    this.APP_NAME = import.meta.env.VITE_APP_NAME;
  }

  public getEnv() {
    return {
      ENV: this.ENV,
      MACHINE: this.MACHINE,
      PORT: this.PORT,
      APP_NAME: this.APP_NAME,
    }
  } 
}

const environmentConnection = new EnvironmentConnection;
export const getEnv = environmentConnection.getEnv();
