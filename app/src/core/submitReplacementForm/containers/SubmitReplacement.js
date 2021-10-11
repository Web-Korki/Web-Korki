import React from 'react';
import { connect } from 'react-redux';
import {
	StyledDate,
	StyledTextarea,
	StyledBlueButton,
} from '../../sharedComponents/styledComponents/index';
import { BackButton } from '../../sharedComponents/containers/BackButton';
import { Container } from '../../sharedComponents/styledComponents';
import Select from '../../sharedComponents/components/Select';

export const SubmitReplacement = () => {
	return (
		<div className='d-flex justify-content-center align-items-center flex-column submitReplacement mt-2'>
			<Container className='d-flex align-items-center flex-column submitReplacementContainer'>
				<div class='d-flex mb-5'>
					<BackButton />
					<h1 className='title ml-2'>Formularz zgłaszania zastępstwa</h1>
				</div>

				<div className='row justify-content-center'>
					<div className='col-md-4 text-left'>
						<label for='klasa'>Klasa</label>
						<Select id='klasa' required>
							{/* option tag rendered conditi */}
						</Select>
					</div>

					<div className='col-md-3 mr-5 text-left'>
						<label for='date' className='mb-2'>
							Data
						</label>
						<StyledDate type='date' id='date' className='ml-3' required />
					</div>

					<div className='col-md-4 text-left'>
						<label for='przedmiot'>Przedmiot</label>
						<Select id='przedmiot' required>
							{/* option tag rendered conditi */}
						</Select>
					</div>
				</div>

				<div className='row d-flex flex-column mt-4 justify-content-center'>
					<label for='ostatnio-przerabiane-zagadnienia'>
						Ostatnio przerabiane zagadnienia
					</label>
					<StyledTextarea name='ostatnio-przerabiane-zagadnienia'></StyledTextarea>
				</div>
				<div className='row d-flex flex-column mt-4 justify-content-center'>
					<label for='planowane-zagadnienia-na-lekcje'>
						Planowane zagadnienia na lekcję
					</label>
					<StyledTextarea name='planowane-zagadnienia-na-lekcje'></StyledTextarea>
				</div>
				<div className='row d-flex flex-column mt-4 justify-content-center'>
					<label for='metodyka-nauczania-oraz-platforma'>
						Metodyka nauczania oraz platforma
					</label>
					<StyledTextarea name='metodyka-nauczania-oraz-platforma'></StyledTextarea>
				</div>
				<div className='row d-flex flex-column mt-4 justify-content-center'>
					<label for='kontakt'>Kontakt</label>
					<StyledTextarea name='kontakt'></StyledTextarea>
				</div>
				<div className='row mt-5'>
					<StyledBlueButton className='py-md-2 px-md-5'>
						Zgłoś zastępstwo
					</StyledBlueButton>
				</div>
			</Container>
		</div>
	);
};

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default connect(null, {})(SubmitReplacement);

// Inner content should be limited by the inner padding of StyledBox
// TextArea and columns of flex content should be limited only by the inner padding of StyledBox
