import React from 'react';
import { MainContainer } from './core/MainContainer';
import { UserMenu } from './core/userMenu/containers/UserMenu';
import { AdminMenu } from './core/adminMenu/containers/AdminMenu';
import { LoginForm } from './core/loginForm/containers/LoginForm';
import { InactiveReplacement } from './core/inactiveReplacement/containers/InactiveReplacement';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Route, Switch } from 'react-router';
import { LectureAnalysis } from './core/lectureAnalysis/containers/LectureAnalysis';
import { VolunteerAnalysis } from './core/volunteerAnalysis/containers/VolunteerAnalysis';

function App() {
  return (
    <>
      <MainContainer>
        <Switch>
          <Route exact path="/UserMenu" component={UserMenu} />
          <Route path="/admin_menu" component={AdminMenu} />
          <Route path="/login_form" component={LoginForm} />
          <Route path="/inactive_replacement" component={InactiveReplacement} />
          <Route path="/lecture_analysis" component={LectureAnalysis} />
          <Route path="/volunteer_analysis" component={VolunteerAnalysis} />
        </Switch>
      </MainContainer>
    </>
  );
}

export default App;
