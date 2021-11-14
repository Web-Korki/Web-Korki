//react
import React, { useEffect } from 'react';

//css
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

//redux
import store from './store';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from './redux/actions/auth';

//router
import { Route, Switch } from 'react-router';

//components
//all styled components are in the same place now. Remember to add them to index.js in the directory src/components/styledComponents
//named imports
import { InactiveSubstitution } from './containers/substitutions/InactiveSubstitution';
import { LectureAnalysis } from './containers/lectureAnalysis/LectureAnalysis';
import { LectureAnalysisDetail } from './containers//lectureAnalysis/LectureAnalysisDetail';
import { VolunteerAnalysis } from './containers/volunteerAnalysis/VolunteerAnalysis';
import { VolunteerAnalysisDetail } from './containers/volunteerAnalysis/VolunteerAnalysisDetail';
import { Whoops404 } from './containers/Whoops404';
//default imports
import Home from './containers/Home';
import UserMenu from './containers/menus/UserMenu';
import AdminMenu from './containers/menus/AdminMenu';
import LoginForm from './containers/forms/LoginForm/LoginForm';
import RegisterForm from './containers/forms/RegisterForm';
import PrivateRoute from './containers/PrivateRoute';
import ActivateAccount from './containers/ActivateAccount';
import ResetPassword from './containers/passwordReset/ResetPassword';
import ResetPasswordConfirm from './containers/passwordReset/ResetPasswordConfirm';
import SubmitSubstitution from './containers/forms/SubmitSubstitution';
import AwaitingSubstitutions
 from './containers/substitutions/AwaitingSubstitutions';

function App() {
  useEffect(() => {
    store.dispatch(checkAuthenticated());
    store.dispatch(load_user());
  });

  return (
    <>
      <Switch>
        {/* USER PATHS */}
        <PrivateRoute exact path="/user_menu" component={UserMenu} />
        <PrivateRoute
          path="/inactive_substitution"
          component={InactiveSubstitution}
        />
        <PrivateRoute
          path="/submit_substitution"
          exact
          component={SubmitSubstitution}
        />
        <PrivateRoute
          path="/substitutions"
          exact
          component={AwaitingSubstitutions}
        />
        {/* <PrivateRoute 
          path="/fill_in_report"
          component={FillInReport}
        /> */}

        {/* ADMIN PATHS */}
        <PrivateRoute path="/admin_menu" component={AdminMenu} />
        <PrivateRoute path="/admin/register_form" component={RegisterForm} />
        {/* <PrivateRoute path="/admin/current_report" component={CurrentReport} /> */}

        <PrivateRoute
          path="/admin/lecture_analysis"
          exact
          component={LectureAnalysis}
        />
        <PrivateRoute
          path="/admin/lecture_analysis/:month"
          component={LectureAnalysisDetail}
        />
        <PrivateRoute
          path="/admin/volunteer_analysis"
          exact
          component={VolunteerAnalysis}
        />
        <PrivateRoute
          path="/admin/volunteer_analysis/:month"
          component={VolunteerAnalysisDetail}
        />
        {/* COMMON PATHS */}
        <Route exact path="/" component={Home} />
        <Route path="/login_form" component={LoginForm} />
        <Route path="/activate/:uid/:token" component={ActivateAccount} />
        <Route path="/reset_password" component={ResetPassword} />
        <Route
          path="/password/reset/confirm/:uid/:token"
          component={ResetPasswordConfirm}
        />
        <Route path="*" component={Whoops404} />
      </Switch>
      <div className="footer fixed-bottom text-center">© 2021 Web-Korki</div>
    </>
  );
}

export default connect(null, { checkAuthenticated, load_user })(App);
