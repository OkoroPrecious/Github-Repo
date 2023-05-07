import React from "react";
import RootNavigation from "./navigation";
import {Provider} from "react-redux";
import {store} from "./redux/store";

type Props = {};

const App = (props: Props) => {
  return (
    <Provider store={store}>
      <RootNavigation/>
    </Provider>
  );
};

export default App;
