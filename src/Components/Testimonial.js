import React, {useState} from 'react'
import { connect } from 'react-redux'

import LogoITB from '../assets/Slicing/Logo_ITB.png'

function Testimonial({testimonyList}) {
    const [listSelected, setListSelected] = useState(0)
    
    function handleNext() {
        if(listSelected == testimonyList.length-1) {
            setListSelected(0)
        }else {
            setListSelected(listSelected + 1)
        }
    }

    function handlePrev() {
        if(listSelected == 0) {
            setListSelected(testimonyList.length-1)
        }else {
            setListSelected(listSelected - 1)
        }
    }

    return (
        <div id="testimonial">
            <div className="title">Testimonials</div>
            <div className="testimonial-wrapper">
                <i onClick={handlePrev} className="fas fa-caret-left arrow-icon-left"/>
                <div className="testimonial-info" >
                    <img className="testimonial-image" src={testimonyList && testimonyList[listSelected].image}/>
                    <div className="testimonial-text-wrapper">
                    <p className="testimonial-text-desc">{testimonyList && testimonyList[listSelected].story}</p>
                    <b className="testimonial-text-person-info">{testimonyList && testimonyList[listSelected].name}</b>
                    </div>
                </div>
                <i onClick={handleNext} className="fas fa-caret-right arrow-icon-right"/>
            </div>
        </div>
    )
}
const mapStatetoProps = state => {
    return {
        testimonyList: state.testimonyList,
    }
}
export default connect(mapStatetoProps, null)(Testimonial);