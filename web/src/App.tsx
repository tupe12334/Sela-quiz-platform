import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import "./Form.css";
import Body from "./layout/Body";
import Header from "./layout/header/Header";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Body />

        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
    </Provider>
  );
}

export default App;
