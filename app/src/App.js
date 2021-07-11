import React from "react";
import { MainContainer } from "./core/MainContainer";
import { UserMenu } from "./core/userMenu/containers/UserMenu";
import { LoginForm } from './core/loginForm/containers/LoginForm';
import { InactiveReplacement } from './core/inactiveReplacement/containers/InactiveReplacement';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Route, Switch } from "react-router";
import { LectureAnalysis } from "./core/lectureAnalysis/containers/LectureAnalysis";

function App() {
  return (
    <>
      <MainContainer>

        <Switch>
          <Route exact path="/UserMenu" component={UserMenu} />
          <Route path='/login_form' component={LoginForm} />
          <Route path='/inactive_replacement' component={InactiveReplacement} />
          <Route path='/lecture_analysis' component={LectureAnalysis} />
        </Switch>

      </MainContainer>
    </>
  );
}

export default App;
