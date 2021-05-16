import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./app/App";
import registerServiceWorker from "./app/registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
