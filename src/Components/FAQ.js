import React from 'react'
import { connect } from 'react-redux'

function FAQ({websiteContent}) {
    return (
        <div id="FAQ">
            <div className="title">FAQ</div>
            <div dangerouslySetInnerHTML={{__html: websiteContent.faq_content}} />
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        websiteContent: state.websiteContent
    }
}
export default connect(mapStatetoProps, null)(FAQ);