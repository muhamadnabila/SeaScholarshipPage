import React, {useState} from 'react'
import { connect } from 'react-redux'

function PartnerUniversity({universityList, facultyList}) {
    const [listSelected, setListSelected] = useState(0)
    
    function handleNext() {
        if(listSelected == universityList.length-1) {
            setListSelected(0)
        }else {
            setListSelected(listSelected + 1)
        }
    }

    function handlePrev() {
        if(listSelected == 0) {
            setListSelected(universityList.length-1)
        }else {
            setListSelected(listSelected - 1)
        }
    }
    return (
        <div id="partner-university">
            <div className="title">Partner Universities</div>
            <div className="info-wrapper">
                <i onClick={handlePrev} className="fas fa-caret-left arrow-icon-left" />
                <div className="info-university-wrapper">
                    <img className="university-logo" src={universityList[0] && universityList[listSelected].univ_logo }/>
                    <div className="info-faculty-wrapper">
                        <div className="university-name">{universityList[0] && universityList[listSelected].univ_name}</div>
                        <ul>
                            {facultyList && facultyList[listSelected+1].map((facultyName, index) => {
                                return <li style={{width: '280px'}} key={index}>{facultyName}</li>
                            })}
                        </ul>
                    </div>
                </div>
                <i onClick={handleNext} className="fas fa-caret-right arrow-icon-right"/>
            </div>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        universityList: state.universityList,
        facultyList: state.facultyList,
    }
}
export default connect(mapStatetoProps, null)(PartnerUniversity);