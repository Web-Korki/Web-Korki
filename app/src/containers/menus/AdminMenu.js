//react
import React, { useEffect } from 'react';
//router
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';
//redux
import { connect } from 'react-redux';
//actions
import { reset_state } from '../../redux/actions/auth';
//styledComponents
import { StyledBox } from '../../components/styledComponents/index';
import Logout from '../forms/Logout';
import PropTypes from 'prop-types';

const AdminMenu = (
	{ reset_state },
	isAuthenticated,
	isSuperuser,
	user,
	accountCreated
) => {
	AdminMenu.propTypes = {
		reset_state: PropTypes.func.isRequired,
		accountCreated: PropTypes.bool,
		isAuthenticated: PropTypes.bool.isRequired,
		isSuperuser: PropTypes.bool.isRequired,
		user: PropTypes.object,
	};

	//needs to be adjusted
	// useEffect(() => {
	// 	reset_state();
	// }, [accountCreated]);

	// setTimeout(() => {
	// 	console.log('isAuthenticated', isAuthenticated);
	// 	console.log('accountCreated', accountCreated);
	// 	console.log('isSuperuser', isSuperuser);
	// 	console.log('user', user);
	// }, 1000);

	return (
		<>
			<div className='adminMenu d-flex justify-content-center'>
				<div className='container'>
					<div className='row d-flex justify-content-lg-between mb-5'>
						<h1 className='col-md-auto text-lg-left text-center title justify-content-lg-start justify-content-center'>
							Panel administratora
						</h1>
						<div className='col-md d-flex align-items-center justify-content-lg-end justify-content-center'>
							<Logout>wyloguj się</Logout>
						</div>
					</div>
					<div className='row justify-content-center'>
						<div className='col-12 col-lg-auto p-lg-2 p-1'>
							<NavLink to='/register_form'>
								<StyledBox>Zarejestruj korepetytora</StyledBox>
							</NavLink>
						</div>
						<div className='col-12 col-lg-auto p-lg-2 p-1'>
							<NavLink to='/current_report'>
								<StyledBox>Bieżący raport</StyledBox>
							</NavLink>
						</div>
						<div className='col-12 col-lg-auto p-lg-2 p-1'>
							<NavLink to='/lecture_analysis'>
								<StyledBox>Analiza - zajęcia</StyledBox>
							</NavLink>
						</div>
						<div className='col-12 col-lg-auto p-lg-2 p-1'>
							<NavLink to='/volunteer_analysis'>
								<StyledBox>Analiza - wolontariusze</StyledBox>
							</NavLink>
						</div>
						<div className='col-12 col-lg-auto p-lg-2 p-1'>
							<NavLink to='/active_replacements'>
								<StyledBox>Aktywne zastępstwa</StyledBox>
							</NavLink>
						</div>
						<div className='col-12 col-lg-auto p-lg-2 p-1'>
							<NavLink to='/user_menu'>
								<StyledBox>Menu nauczyciela</StyledBox>
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const mapStateToProps = (state) => ({
	accountCreated: state.auth.accountCreated,
	isAuthenticated: state.auth.isAuthenticated,
	isSuperuser: state.auth.isSuperuser,
	user: state.auth.user,
});

export default connect(mapStateToProps, { reset_state })(AdminMenu);
