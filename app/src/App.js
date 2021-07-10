import React from "react";
import { UserMenu } from "./core/userMenu/containers/UserMenu";
import { MainContainer } from "./core/MainContainer";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Route, Switch } from "react-router";

function App() {
  return (
    <>
      <MainContainer>

        <Switch>

          <Route exact path="/" component={UserMenu} />

        </Switch>

      </MainContainer>
    </>
  );
}

export default App;
