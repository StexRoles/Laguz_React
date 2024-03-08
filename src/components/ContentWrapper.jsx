import React from 'react'
import ContentRowTop from './ContentRowTop'
import Footer from './Footer';
import TopBar from './TopBar';

function ContentWrapper() {
    return (
        <>
            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">

                {/* Main Content */}
                <div id="content">

                    {/* IMPORT TopBar */}
                    < TopBar />

                    {/* IMPORT ContentRowTop */}
                    < ContentRowTop />
                </div>
                {/* End of MainContent */}

                {/* IMPORT Footer */}
                <Footer />
            </div>
            {/* End of Content Wrapper */}
        </>
    )
}

export default ContentWrapper;