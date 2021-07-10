import React from 'react'
import { StyledBoxLectureAnalysis } from '../styledComponents/index';

export const LectureAnalysis = () => {
    return (
        <>
            <div className='lectureAnalysisWrapper d-flex align-items-center justify-content-center'>
                <div className="lectureAnalysisInnerWrapper">
                    <div className="row">
                        <div className="lectureAnalysisTitle text-center col-12">
                            <h1>Analiza - zajęcia</h1>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-3">
                            <StyledBoxLectureAnalysis>Wrzesień
                            </StyledBoxLectureAnalysis>
                            </div>
                        <div className="col-3">
                            <StyledBoxLectureAnalysis>Październik
                            </StyledBoxLectureAnalysis>
                            </div>
                        <div className="col-3">
                            <StyledBoxLectureAnalysis>Listopad
                            </StyledBoxLectureAnalysis>
                            </div>
                        <div className="col-3">
                            <StyledBoxLectureAnalysis>Grudzień
                            </StyledBoxLectureAnalysis>
                            </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <StyledBoxLectureAnalysis>Styczeń
                            </StyledBoxLectureAnalysis>
                            </div>
                        <div className="col-3">
                            <StyledBoxLectureAnalysis>Luty
                            </StyledBoxLectureAnalysis>
                            </div>
                        <div className="col-3">
                            <StyledBoxLectureAnalysis>Marzec
                            </StyledBoxLectureAnalysis>
                            </div>
                        <div className="col-3">
                            <StyledBoxLectureAnalysis>Kwiecień
                            </StyledBoxLectureAnalysis>
                            </div>
                    </div>
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-3">
                            <StyledBoxLectureAnalysis>Maj
                            </StyledBoxLectureAnalysis>
                        </div>
                        <div className="col-3">
                            <StyledBoxLectureAnalysis>Czerwiec
                            </StyledBoxLectureAnalysis>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
