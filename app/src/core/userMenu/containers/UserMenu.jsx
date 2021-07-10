import React from 'react'
import { StyledBox, StyledLogout } from '../styledComponents/index';
import { Link, NavLink } from 'react-router-dom';

export const UserMenu = () => {
    return (
        <>
        <div className="rootDiv d-flex align-items-center justify-content-center">
            <div className="wrapper">
                <div className="row">
                    <div className="col-2 d-flex justify-content-center align-items-center menu-text">Menu</div>
                    <div className="col-7 d-flex justify-content-center align-items-center"></div>
                    <div className="col-2 d-flex justify-content-center align-items-center"><StyledLogout>wyloguj się</StyledLogout></div>
                </div>
                <div className="row buttons_wrapper">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <NavLink className='nav-link' to='/submit_replacement'>
                            <StyledBox>Zgłoś zastępstwo</StyledBox>
                        </NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <NavLink className='nav-link' to='/active_replacements'>
                            <StyledBox>Aktywne zastępstwa</StyledBox>
                        </NavLink>
                    </div>
                    <div className="col-md-12 d-flex justify-content-center align-items-center">
                        <NavLink className='nav-link' to='/fill_in_report'>
                            <StyledBox>Uzupełnij raport</StyledBox>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
