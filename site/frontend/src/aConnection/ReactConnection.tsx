import React from "react";
import { getEnv } from "./EnvironmentConnection";


const ENV = getEnv.ENV;
const MACHINE = getEnv.MACHINE;
const PORT = getEnv.PORT;
const APP_NAME = getEnv.APP_NAME;

const ReactConnection = () => {
  // Render check
  console.log("React connection created successfully...");
  
  // JSX
  return (
    <React.Fragment>
      {/* ReactConnection */}

      <div>
        <h1>React Connection</h1>
        <p>React connection created successfully...</p>
        <ul>
          <li>Environment: {ENV}</li>
          <li>Machine: {MACHINE}</li>
          <li>PORT: {PORT}</li>
          <li>App Name: {APP_NAME}</li>
        </ul>
      </div>

    </React.Fragment>
  )
}

export default ReactConnection;
