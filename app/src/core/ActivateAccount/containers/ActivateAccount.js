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
		<div className='d-flex justify-content-center align-items-center flex-column loginForm'>
			{/* <form onSubmit={e => onSubmit(e)}>
				<StyledLoginBox className='d-flex align-items-center flex-column'>
					<h1 className='mt-md-5 mb-3'>Logowanie do platformy</h1>
					<StyledInput
						id='name'
						type='text'
						placeholder='login'
						className='mt-md-5 mt-4 mb-4'
						name='username'
						value={username}
						onChange={e => onChange(e)}
						required
					/>
					<StyledInput
						id='password'
						type='password'
						placeholder='hasło'
						name='password'
						value={password}
						onChange={e => onChange(e)}
						required
					/>
					<StyledBlueButton type='submit' className='mt-4 px-5 py-2'>
						zaloguj się
					</StyledBlueButton>
				</StyledLoginBox>
			</form>
			<Link className='mt-3' to='/reset-password'>Zapomniałem hasła</Link> */}
		</div>
	);
};

export default connect(null, { verify })(ActivateAccount)