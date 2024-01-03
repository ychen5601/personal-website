import ReactPageScroller from 'react-page-scroller';
import about from '../assets/about';
import React from 'react';
import codePhoto from '../assets/code-photo.jpeg';
import teamPlayer from '../assets/teamPlayer';

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

    const bodyAndImgContainer = {
        display: "flex"
    }

    const bodyStyle = {
        display: "flex",
        marginRight: 8,
        marginTop: 8,
        color: "#415B41",
    }

    const imageStyles = {
        borderRadius: 70,
        height: 140,
        width: 140,
        marginRight: 8,
        marginTop: 24,
      }

    return (
        <ReactPageScroller>
            <div style={pageStyle}>
                <div style={contentStyle}>
                    <header>{about.title}</header>
                    <div style={bodyAndImgContainer}>
                        <body style={bodyStyle}>
                            {about.text.split('\n').map((line: string, index: number) => (
                            <React.Fragment key={index}>
                                {line} <br />
                            </React.Fragment>
                            ))}
                        </body>
                        <img src={codePhoto} style={imageStyles}/>
                    </div>
                </div>
            </div>
            <div style={pageStyle}>
                <div style={contentStyle}>
                    <header>{teamPlayer.title}</header>
                    <div style={bodyAndImgContainer}>
                        <body style={bodyStyle}>
                            {teamPlayer.text.split('\n').map((line: string, index: number) => (
                            <React.Fragment key={index}>
                                {line} <br />
                            </React.Fragment>
                            ))}
                        </body>
                    </div>
                </div>
            </div>
            <div style={pageStyle}>page 3</div>
            <div style={pageStyle}>page 4</div>
        </ReactPageScroller>
    );
}

export default AboutPage;
