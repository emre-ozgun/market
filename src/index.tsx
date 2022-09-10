import React from "react";
import { createRoot } from "react-dom/client"; //FIXME:
import { Provider } from "react-redux";

import ConfigStore from "@store/ConfigStore";
import App from "./App";


/******* - Styles - *******/
import "antd/dist/antd.less";
import "@ant-design/icons";
import "@assets/less/app.less";
/******* - ______ - *******/


const root = createRoot(document.getElementById("root"));

root.render(
      <Provider store={ConfigStore}>
            <App />
      </Provider>
);
