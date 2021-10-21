import React from 'react';
import { StyledBox } from '../../components/styledComponents';
import Logout from '../forms/Logout';
import './UserMenu.style.css';
import { NavLink } from 'react-router-dom';
import './UserMenu.style.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const UserMenu = (isAuthenticated, isSuperuser, user) => {
	UserMenu.propTypes = {
		isAuthenticated: PropTypes.bool.isRequired,
		isSuperuser: PropTypes.bool.isRequired,
		user: PropTypes.object,
	};

	let AdminMenuBtn;

	if (isSuperuser) {
		AdminMenuBtn = (
			<div className='col-12 col-lg-auto p-lg-2 p-1'>
				<NavLink to='/admin_menu'>
					<StyledBox>Menu administratora</StyledBox>
				</NavLink>
			</div>
		);
	} else {
		AdminMenuBtn = null;
	}

	console.log('isAuthenticated', isAuthenticated);
	console.log('isSuperuser', isSuperuser);
	console.log('user', user);

	return (
		<>
			<div className='userMenu d-flex justify-content-center'>
				<div className='container'>
					<div className='row d-flex justify-content-lg-between mb-5'>
						<h1 className='col-md-auto text-lg-left text-center title justify-content-lg-start justify-content-center'>
							Menu
						</h1>
						<div className='col-md d-flex align-items-center justify-content-lg-end justify-content-center'>
							<Logout>wyloguj się</Logout>
						</div>
					</div>
					<div className='row justify-content-center'>
						<div className='col-12 col-lg-auto p-lg-2 p-1'>
							<NavLink to='/submit_replacement'>
								<StyledBox>Zgłoś zastępstwo</StyledBox>
							</NavLink>
						</div>
						<div className='col-12 col-lg-auto p-lg-2 p-1'>
							<NavLink to='/active_replacements'>
								<StyledBox>Aktywne zastępstwa</StyledBox>
							</NavLink>
						</div>
						<div className='col-12 col-lg-auto p-lg-2 p-1'>
							<NavLink to='/fill_in_report'>
								<StyledBox>Uzupełnij raport</StyledBox>
							</NavLink>
						</div>
						{AdminMenuBtn}
					</div>
				</div>
			</div>
		</>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
	isSuperuser: state.auth.isSuperuser,
	user: state.auth.user,
});

export default connect(mapStateToProps)(UserMenu);
