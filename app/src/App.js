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
import { MainContainer } from './components/styledComponents/index.js';
import { InactiveReplacement } from './containers/InactiveReplacement';
import { LectureAnalysis } from './containers/lectureAnalysis/LectureAnalysis';
import { LectureAnalysisDetail } from './containers//lectureAnalysis/LectureAnalysisDetail';
import { VolunteerAnalysis } from './containers/volunteerAnalysis/VolunteerAnalysis';
import { VolunteerAnalysisDetail } from './containers/volunteerAnalysis/VolunteerAnalysisDetail';
import { Whoops404 } from './containers/Whoops404';
import { Home } from './containers/Home';
//default imports
import UserMenu from './containers/menus/UserMenu';
import AdminMenu from './containers/menus/AdminMenu';
import LoginForm from './containers/forms/LoginForm';
import RegisterForm from './containers/forms/RegisterForm';
import PrivateRoute from './containers/PrivateRoute';
import ActivateAccount from './containers/ActivateAccount';
import ResetPassword from './containers/passwordReset/ResetPassword';
import ResetPasswordConfirm from './containers/passwordReset/ResetPasswordConfirm';
import SubmitReplacement from './containers/forms/SubmitReplacement';

function App() {
	useEffect(() => {
		store.dispatch(checkAuthenticated());
		store.dispatch(load_user());
	});

	return (
		<>
			<MainContainer>
				<Switch>
					<Route exact path='/' component={Home} />
					<PrivateRoute exact path='/user_menu' component={UserMenu} />
					<PrivateRoute exact path='/admin_menu' component={AdminMenu} />
					<Route path='/login_form' component={LoginForm} />
					<PrivateRoute
						exact
						path='/register_form'
						component={RegisterForm}
					/>
					<PrivateRoute
						path='/inactive_replacement'
						component={InactiveReplacement}
					/>
					<Route
						path='/submit_replacement'
						exact
						component={SubmitReplacement}
					/>
					<Route
						path='/lecture_analysis'
						exact
						component={LectureAnalysis}
					/>
					<Route
						path='/lecture_analysis/:month'
						component={LectureAnalysisDetail}
					/>
					<Route
						path='/volunteer_analysis'
						exact
						component={VolunteerAnalysis}
					/>
					<Route
						path='/volunteer_analysis/:month'
						component={VolunteerAnalysisDetail}
					/>
					{/* <PrivateRoute path='/volunteer_register' component={VolunteerRegister} /> */}
					<Route
						path='/activate/{uid}/{token}'
						component={ActivateAccount}
					/>
					<Route path='/reset_password' component={ResetPassword} />
					<Route
						path='/password/reset/confirm/{uid}/{token}'
						component={ResetPasswordConfirm}
					/>
					<Route path='*' component={Whoops404} />
				</Switch>
			</MainContainer>
		</>
	);
}

export default connect(null, { checkAuthenticated, load_user })(App);
