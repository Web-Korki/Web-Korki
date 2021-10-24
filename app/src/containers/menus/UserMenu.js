//react
import React from 'react';
//router
import { NavLink } from 'react-router-dom';
//utils
import Logout from '../forms/Logout';
import { StyledBox } from '../../components/styledComponents';
import './UserMenu.style.css';

const UserMenu = () => {
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
					</div>
				</div>
			</div>
		</>
	);
};

export default UserMenu;
