import React, { useEffect } from 'react';
import { MainContainer } from './core/MainContainer';
import UserMenu from './core/userMenu/containers/UserMenu';
import AdminMenu from './core/adminMenu/containers/AdminMenu';
import LoginForm from './core/loginForm/containers/LoginForm';
import RegisterForm from './core/RegisterForm/containers/RegisterForm';
import { InactiveReplacement } from './core/inactiveReplacement/containers/InactiveReplacement';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Route, Switch, Redirect } from 'react-router';
import { LectureAnalysis } from './core/lectureAnalysis/containers/LectureAnalysis';
import { LectureAnalysisDetail } from './core/lectureAnalysis/containers/LectureAnalysisDetail';
import { VolunteerAnalysis } from './core/volunteerAnalysis/containers/VolunteerAnalysis';
import { VolunteerAnalysisDetail } from './core/volunteerAnalysis/containers/VolunteerAnalysisDetail';
import { Whoops404 } from './core/Whoops404/containers/Whoops404';
import { Home } from './core/Home/containers/Home';
import PrivateRoute from './core/common/PrivateRoute';
// import { VolunteerRegister } from './core/volunteerRegister/containers/VolunteerRegister';

//API
import store from './store';
import { load_user } from './redux/actions/auth';
import ActivateAccount from './core/ActivateAccount/containers/ActivateAccount';
import ResetPassword from './core/ResetPassword/containers/ResetPassword';
import ResetPasswordConfirm from './core/ResetPasswordConfirm/containers/ResetPasswordConfirm';

function App() {
  useEffect(() => {
    store.dispatch(load_user());
  });

  return (
    <>
      <MainContainer>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/UserMenu" component={UserMenu} />
          <PrivateRoute path="/admin_menu" component={AdminMenu} />
          <Route path="/login_form" component={LoginForm} />
          <PrivateRoute path="/register_form" component={RegisterForm} />
          <PrivateRoute
            path="/inactive_replacement"
            component={InactiveReplacement}
          />
          {/* na czas budowania */}
          <Route path="/lecture_analysis" exact component={LectureAnalysis} />
          <Route
            path="/lecture_analysis/:month"
            component={LectureAnalysisDetail}
          />
          {/* na czas budowania */}
          <Route
            path="/volunteer_analysis"
            exact
            component={VolunteerAnalysis}
          />
          <Route
            path="/volunteer_analysis/:month"
            component={VolunteerAnalysisDetail}
          />
          {/* <PrivateRoute path='/volunteer_register' component={VolunteerRegister} /> */}
          {/* <Route path="/activate/{uid}/{token}" component={ActivateAccount} /> */}
          <Route path="/activate" component={ActivateAccount} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route
            path="/password/reset/confirm/{uid}/{token}"
            component={ResetPasswordConfirm}
          />
          <Route path="*" component={Whoops404} />
        </Switch>
      </MainContainer>
    </>
  );
}

export default App;
