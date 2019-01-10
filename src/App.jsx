import React, { Component, Fragment } from 'react';
import Header from "./components/Header";
import MainContainer from "./containers/mainContainer";
import {  AppConsumer, AppProvider } from "./AppContext";

export const App = ({dispatch}) => {
   return (
      <Fragment>
        <Header showOrHideSidebar={() => dispatch({type: 'TOGGLE_SIDEBAR'})}/>
        <MainContainer />
      </Fragment>
    )
}

class AppContainer extends Component {
  render() {
    return (
      <AppProvider>
          <AppConsumer>
            {({dispatch}) => {
               return <App dispatch={dispatch}/>
            }}
          </AppConsumer>
      </AppProvider>
    );
  }
}

export default AppContainer;
