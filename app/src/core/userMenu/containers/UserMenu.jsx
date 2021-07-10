import React from 'react'
import { StyledBox } from '../styledComponents/styledBox'

export const UserMenu = () => {
    return (
        <>
        <div className="wrapper">
            <div className="row">
                <div className="col-2 d-flex justify-content-center align-items-center menu-text">Menu</div>
                <div className="col-8 d-flex justify-content-center align-items-center"></div>
                <div className="col-2 d-flex justify-content-center align-items-center">Styled Component</div>
            </div>
            <div className="row">
                <div className="col-2 d-flex justify-content-center align-items-center"><StyledBox>dsd</StyledBox></div>
                <div className="col-8 d-flex justify-content-center align-items-center"><StyledBox>dsd</StyledBox></div>
                <div className="col-2 d-flex justify-content-center align-items-center"><StyledBox>dsd</StyledBox></div>
            </div>
        </div>
        </>
    )
}
