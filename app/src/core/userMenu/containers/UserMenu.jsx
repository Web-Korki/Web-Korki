import React from 'react';
import { StyledBox } from '../styledComponents/index';
import { StyledGreyButton } from '../../sharedComponents/styledComponents';
import { Link, NavLink } from 'react-router-dom';
import '../UserMenu.style.css';

export const UserMenu = () => {
	return (
		<>
			<div className='userMenu d-flex justify-content-center'>
				<div className='wrapper'>
					<div className='row d-flex justify-content-between mb-5 menu-text-wrapper'>
						<div className='col-md-auto menu-text'>
							<p>Menu</p>
						</div>
						<div className='col-md d-flex align-items-center justify-content-end'>
							<NavLink to='/login_form'>
								<StyledGreyButton className='mr-3 logout-lg'>
									wyloguj się
								</StyledGreyButton>
							</NavLink>
						</div>
					</div>
					<div className='row justify-content-center'>
						<div className='col-auto p-0 d-flex justify-content-end'>
							<NavLink className='nav-link p-0' to='/submit_replacement'>
								<StyledBox>Zgłoś zastępstwo</StyledBox>
							</NavLink>
						</div>
						<div className='col-auto p-0 d-flex justify-content-start'>
							<NavLink className='nav-link p-0' to='/active_replacements'>
								<StyledBox>Aktywne zastępstwa</StyledBox>
							</NavLink>
						</div>
						<div className='col-auto p-0 d-flex justify-content-center'>
							<NavLink className='nav-link p-0' to='/fill_in_report'>
								<StyledBox>Uzupełnij raport</StyledBox>
							</NavLink>
						</div>
						<div className='col-auto p-0 d-flex logout-sm-container'>
							<NavLink to='/login_form'>
								<StyledGreyButton className='logout-sm'>
									wyloguj się
								</StyledGreyButton>
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};