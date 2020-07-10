import React from 'react';
import BgHead from '../assets/Slicing/BG-Head.jpg'
import IconGraduate from '../assets/Slicing/icon-graduate.png'

function Header() {
    return (
        <div id="header">
            <div className="header-text-wrapper">
                <h1 className='header-title'>Congratulations Sea Scholarship 2019 Awardees!</h1>
                <p className='header-desc'>The Sea Scholarship Committee is proud to announce the 2019 Academix Year Sea SCholarship recipients. Final award email notifications were sent on October 17, 2019.</p>
            </div>
            <img className="header-image" src={IconGraduate}/>
        </div>
    )
}
export default Header;