import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';
import "./index.css";
import Home from "./components/home";
import { Provider } from "react-redux";
import configureStore from "./redux/config-store";

function App() {
  return (
    <Provider store={configureStore()}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}


export default App;
