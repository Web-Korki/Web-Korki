import React from 'react';
import { StyledGreyButton, StyledBox } from '../../components/styledComponents';
import './UserMenu.style.css';
import { NavLink } from 'react-router-dom';
import './UserMenu.style.css';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/auth';
import PropTypes from 'prop-types';

const UserMenu = ({ logout }, isAuthenticated, isSuperuser) => {
	UserMenu.propTypes = {
		isAuthenticated: PropTypes.bool.isRequired,
		isSuperuser: PropTypes.bool.isRequired,
	};

	console.log(isSuperuser, isAuthenticated);

	return (
		<>
			<div className='userMenu d-flex justify-content-center'>
				<div className='container'>
					<div className='row d-flex justify-content-lg-between mb-5'>
						<h1 className='col-md-auto text-lg-left text-center title justify-content-lg-start justify-content-center'>
							Menu
						</h1>
						<div className='col-md d-flex align-items-center justify-content-lg-end justify-content-center'>
							<StyledGreyButton onClick={logout}>
								wyloguj się
							</StyledGreyButton>
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
						{isSuperuser ? (
							<div className='col-12 col-lg-auto p-lg-2 p-1'>
								<NavLink to='/admin_menu'>
									<StyledBox>Menu administratora</StyledBox>
								</NavLink>
							</div>
						) : null}
					</div>
				</div>
			</div>
		</>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
	isSuperuser: state.auth.user?.is_superuser,
});

export default connect(mapStateToProps, { logout })(UserMenu);
