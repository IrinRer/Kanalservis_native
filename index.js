import { AppRegistry } from "react-native";
import React from "react";
import App from "./App";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";

const RNRedux = () => <App />;

AppRegistry.registerComponent(appName, () => RNRedux);
