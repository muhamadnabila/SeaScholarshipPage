import React from 'react';
import { connect } from 'react-redux'

import IconFreshmen from '../assets/Slicing/icon-freshmen.png'
import IconSenior from '../assets/Slicing/icon-senior.png'

function Program({websiteContent}) {
    return (
        <div id="program">
            <div className="title">Undergraduate Scholarship Program</div>
            <p className="program-description">{websiteContent.program_content}</p>
            <div className="card-wrapper">
                <div className="program-card">
                    <img src={IconFreshmen}/>
                    <div className="title">Sea Freshmen Scholarship Program</div>
                    <div dangerouslySetInnerHTML={{__html: websiteContent.freshman_program}} />
                </div>
                <div className="program-card">
                    <img src={IconSenior}/>
                    <div className="title">Sea Senior Scholarship Program</div>
                    <div dangerouslySetInnerHTML={{__html: websiteContent.senior_program}} />
                </div>
            </div>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        websiteContent: state.websiteContent
    }
}
export default connect(mapStatetoProps, null)(Program);