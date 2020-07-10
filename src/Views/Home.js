import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {
    hitWebsiteContent, 
    hitListofUniversity, 
    hitListofFaculty, 
    hitListofTestimony
} from '../store/actions'

import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Program from '../Components/Program'
import PartnerUniversity from '../Components/PartnerUniversity'
import Timeline from '../Components/Timeline'
import Testimonial from '../Components/Testimonial'
import FAQ from '../Components/FAQ'
import Footer from '../Components/Footer'
import Announcement from '../Components/Announcement'


function Home({hitWebsiteContent, hitListofUniversity, hitListofFaculty, hitListofTestimony}) {
    
    useEffect(()=>{
        
        {/** 
            fetch all the API from action
        */}

        hitWebsiteContent() 
        hitListofUniversity() 
        hitListofFaculty() 
        hitListofTestimony()
    },[])

    return(
        <>
            <Navbar />
            <Header />
            <Program />
            <PartnerUniversity />
            <Timeline />
            <Testimonial />
            <Announcement />
            <FAQ />
            <Footer />
        </>
    )
}

const mapDispatchtoProps = {
    hitWebsiteContent, 
    hitListofUniversity, 
    hitListofFaculty, 
    hitListofTestimony
};
export default connect(null, mapDispatchtoProps)(Home);