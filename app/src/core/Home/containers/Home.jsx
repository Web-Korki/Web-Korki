import React from 'react'
import { StyledBox } from '../../userMenu/styledComponents'
import { NavLink } from 'react-router-dom'

export const Home = () => {
    return (
        <div  className='d-flex justify-content-center align-items-center flex-column' style={{ height: '100vh' }}>
            <div className="mb-5"><h1>Miejsce na logo</h1></div>
            <div>
                <NavLink to='/login_form'>
                    <StyledBox>Zaloguj się</StyledBox>
                </NavLink>
            </div>
        </div>
    )
}