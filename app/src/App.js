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
import { VolunteerAnalysisDetail } from './core/volunteerAnalysis/containers/VolunteerAnalysisDetail';
import { Whoops404 } from './core/Whoops404/containers/Whoops404';
import { Home } from './core/Home/containers/Home';
import { VolunteerRegister } from './core/volunteerRegister/containers/VolunteerRegister';

function App() {
  return (
    <>
      <MainContainer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/UserMenu" component={UserMenu} />
          <Route path="/admin_menu" component={AdminMenu} />
          <Route path="/login_form" component={LoginForm} />
          <Route path="/inactive_replacement" component={InactiveReplacement} />
          <Route path="/lecture_analysis" component={LectureAnalysis} />
          <Route path="/volunteer_analysis" component={VolunteerAnalysis} />
          <Route
            path="/volunteer_analysis_detail"
            component={VolunteerAnalysisDetail}
          />
          <Route path="/volunteer_register" component={VolunteerRegister} />
          <Route path="*" component={Whoops404} />
        </Switch>
      </MainContainer>
    </>
  );
}

export default App;
