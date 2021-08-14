import { StylesProvider } from "@material-ui/styles";
import { createBrowserHistory } from "history";
import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import "./App.css";
import "./Form.css";
import Body from "./layout/Body";
import Header from "./layout/header/Header";
import store from "./store/store";
const history = createBrowserHistory();

function App() {
  return (
    <StylesProvider injectFirst>
      <Provider store={store}>
        <Router history={history}>
          <div className="App">
            <Header />
            <Body />
          </div>
        </Router>
      </Provider>
    </StylesProvider>
  );
}

export default App;
