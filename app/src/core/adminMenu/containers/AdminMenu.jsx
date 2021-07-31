import { StyledBox } from '../../userMenu/styledComponents/index';
<<<<<<< HEAD
import { StyledGrayBtn } from '../../ReusableComponents/index';
import { Link, NavLink } from 'react-router-dom';

export const AdminMenu = () => {
	return (
		<>
			<div className='adminMenu d-flex justify-content-center'>
				<div className='wrapper'>
					<div className='row d-flex justify-content-between mb-5'>
						<div className='col-md-auto menu-text'>Panel administratora</div>
						<div className='col-md d-flex align-items-center justify-content-end'>
							<NavLink to='/login_form'>
								<StyledGrayBtn>wyloguj się</StyledGrayBtn>
							</NavLink>
						</div>
					</div>
					<div className='row justify-content-center'>
						<div className='col-auto p-0 d-flex justify-content-end'>
							<NavLink className='nav-link p-0' to='/tutor_register'>
								<StyledBox>Zarejestruj korepetytora</StyledBox>
							</NavLink>
						</div>
						<div className='col-auto p-0 d-flex justify-content-start'>
							<NavLink className='nav-link p-0' to='/current_report'>
								<StyledBox>Bieżący raport</StyledBox>
							</NavLink>
						</div>
						<div className='col-auto p-0 d-flex justify-content-end'>
							<NavLink className='nav-link p-0' to='/lecture_analysis'>
								<StyledBox>Analiza - zajęcia</StyledBox>
							</NavLink>
						</div>
						<div className='col-auto p-0 d-flex justify-content-start'>
							<NavLink className='nav-link p-0' to='/volunteer_analysis'>
								<StyledBox>Analiza - wolontariusze</StyledBox>
							</NavLink>
						</div>
						<div className='col-auto p-0 d-flex justify-content-center'>
							<NavLink className='nav-link p-0' to='/active_replacements'>
								<StyledBox>Aktywne zastępstwa</StyledBox>
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</>
	);
=======
import { StyledGreyButton } from '../../sharedComponents/styledComponents/index';
import { NavLink } from 'react-router-dom';

export const AdminMenu = () => {
  return (
    <>
      <div className="adminMenu d-flex justify-content-center">
        <div className="wrapper">
          <div className="row d-flex justify-content-between mb-5">
            <div className="col-md-auto menu-text">Panel administratora</div>
            <div className="col-md d-flex align-items-center justify-content-end">
              <NavLink to="/login_form">
                <StyledGreyButton>wyloguj się</StyledGreyButton>
              </NavLink>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto p-0 d-flex justify-content-end">
              <NavLink className="nav-link p-0" to="/volunteer_register">
                <StyledBox>Zarejestruj korepetytora</StyledBox>
              </NavLink>
            </div>
            <div className="col-auto p-0 d-flex justify-content-start">
              <NavLink className="nav-link p-0" to="/current_report">
                <StyledBox>Bieżący raport</StyledBox>
              </NavLink>
            </div>
            <div className="col-auto p-0 d-flex justify-content-end">
              <NavLink className="nav-link p-0" to="/lecture_analysis">
                <StyledBox>Analiza - zajęcia</StyledBox>
              </NavLink>
            </div>
            <div className="col-auto p-0 d-flex justify-content-start">
              <NavLink className="nav-link p-0" to="/volunteer_analysis">
                <StyledBox>Analiza - wolontariusze</StyledBox>
              </NavLink>
            </div>
            <div className="col-auto p-0 d-flex justify-content-center">
              <NavLink className="nav-link p-0" to="/active_replacements">
                <StyledBox>Aktywne zastępstwa</StyledBox>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
>>>>>>> master
};
