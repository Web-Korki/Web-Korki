import React, { useState } from 'react';
import { StyledLoginBox, StyledInput } from '../../loginForm/styledComponents';
import { StyledBlueButton } from '../../sharedComponents/styledComponents';
import { Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../../../redux/actions/auth';

const ActivateAccount = ({ verify, match }) => {	
    const [verified, setVerified] = useState(false);

	const verify_account = e => {
		const uid = match.params.uid;
        const token = match.params.token;
		
        verify(uid, token)
        setVerified(true);
	};

	if(verified){
		return <Redirect to='/UserMenu' />
	}

	return (
		<div className='d-flex justify-content-center align-items-center flex-column activateAccount'>
			<StyledLoginBox className='d-flex align-items-center justify-content-center flex-column'>
				<h1 className='mb-3'>Aktywacja nowego konta</h1>
				<StyledBlueButton 
					className='mt-4 px-5 py-2'
					onClick={verify_account}
					type="button"
				>
					Aktywuj
				</StyledBlueButton>
			</StyledLoginBox>
		</div>
	);
};

export default connect(null, { verify })(ActivateAccount)