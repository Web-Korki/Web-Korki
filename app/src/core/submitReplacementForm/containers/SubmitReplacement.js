import React from 'react'
import { connect } from 'react-redux'
import { StyledInput } from '../../loginForm/styledComponents'
import { BackButton } from '../../sharedComponents/containers/BackButton'
import { StyledBox } from '../../sharedComponents/styledComponents'
import Select from '../../sharedComponents/components/Select'

export const SubmitReplacement = () => {
    return (
        <div className='d-flex justify-content-center align-items-center flex-column submitReplacement'>
            <StyledBox
                className='d-flex align-items-center flex-column submitReplacementContainer'
            >
                <div class="d-flex mb-5">
                    <BackButton />
                    <h1 className="title ml-2">Formularz zgłaszania zastępstwa</h1>
                </div>
                
                <div className="row">
                    <div className='col-md-4 text-left'>
                        <label for='klasa'>Klasa</label>
                        <Select 
                            id="klasa"
                            required
                        >
                            {/* option tag rendered conditi */}
                        </Select>
                    </div>    
                    
                    <div className='col-md-3 mr-5 text-left'>
                        <label for='date'>Data</label>
                        <StyledInput type='date' id='date' className='ml-3' required />
                    </div>

                    <div className='col-md-4 text-left'>
                    <label for='przedmiot'>Przedmiot</label>
                        <Select 
                            id="przedmiot"
                            required
                        >
                            {/* option tag rendered conditi */}
                        </Select>
                    </div>    
                </div>

                <div className="row">
                    xxx
                </div>
            </StyledBox>
        </div>
    ) 
}

// const mapStateToProps = (state) => ({
    
// })

// const mapDispatchToProps = {
    
// }

export default connect(null, {})(SubmitReplacement)


// Inner content should be limited by the inner padding of StyledBox
// TextArea and columns of flex content should be limited only by the inner padding of StyledBox