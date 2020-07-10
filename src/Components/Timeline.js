import React from 'react'
import { connect } from 'react-redux'

import Timeline1 from '../assets/Slicing/Timeline-1.png'
import Timeline2 from '../assets/Slicing/Timeline-2.png'
import Timeline3 from '../assets/Slicing/Timeline-3.png'
import Timeline4 from '../assets/Slicing/Timeline-4.png'

function Timeline({websiteContent}) {
    return(
        <div id="timeline">
            <div className="title">Timeline</div>
                <div className="timeline-wrapper">
                    <div className="timeline-title-wrapper">
                        <div className="timeline-title">Registration</div>
                        <div className="timeline-title">Essay and CV Screening</div>
                        <div className="timeline-title">On-campus Interview</div>
                        <div className="timeline-title">Announcement of Selected Scholars</div>
                    </div>
                    <div className="timeline-image-wrapper">
                        <img className="timeline-icon" src={Timeline1}/>
                        <div className="grey-line" />
                        <img className="timeline-icon" src={Timeline2}/>
                        <div className="grey-line" />
                        <img className="timeline-icon" src={Timeline3}/>
                        <div className="grey-line" />
                        <img className="timeline-icon" src={Timeline4}/>
                    </div>
                    <div className="timeline-date-wrapper">
                        <h6 className="timeline-date">{websiteContent.date_regis}</h6>
                        <h6 className="timeline-date">{websiteContent.date_esay_cvscreen}</h6>
                        <h6 className="timeline-date">{websiteContent.date_interview}</h6>
                        <h6 className="timeline-date">{websiteContent.date_announce}</h6>
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
export default connect(mapStatetoProps, null)(Timeline);