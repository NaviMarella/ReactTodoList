import React from "react";
import { RootReducer, initialState } from "./rootReducer";
export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  state = {
    ...initialState,
    dispatch: action => {
      this.setState(state => RootReducer(state, action));
    }
  };
  render() {
    const { state, props: { children } } = this;
    return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
  }
}

export const AppConsumer = AppContext.Consumer;