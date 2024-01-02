import ReactPageScroller from 'react-page-scroller';
import about from '../assets/about';
import React from 'react';

function AboutPage() {

    const scrollerContainerStyle = {
        paddingTop: 48,
    };

    const pageStyle = {
        height: "100vh",
        paddingTop: 76,
    };

    const contentStyle = {
     
        alignItems: "center",
        paddingTop: "19%",
        marginLeft: 8,
    };

    const bodyStyle = {
        marginRight: 8,
        marginTop: 8,
        color: "#415B41",
    }

    return (
        <ReactPageScroller>
            <div style={pageStyle}>
                <div style={contentStyle}>
                    <header>{about.title}</header>
                    <body style={bodyStyle}>
                        {about.text.split('\n').map((line: string, index: number) => (
                        <React.Fragment key={index}>
                            {line} <br />
                        </React.Fragment>
                        ))}
                    </body>
                </div>
            </div>
            <div style={pageStyle}>page 2</div>
            <div style={pageStyle}>page 3</div>
            <div style={pageStyle}>page 4</div>
        </ReactPageScroller>
    );
}

export default AboutPage;
