import about from '../assets/about';
import React, { useEffect, useRef } from 'react';
import teamPlayer from '../assets/teamPlayer';
import athlete from '../assets/athlete';
import '../assets/styles.css';


function AboutPage() {

    const scrollerContainerStyle = {
        paddingTop: 48,
    };

    const pageStyle = {
        marginRight: "30vw",
        marginLeft: "30vw",
        marginTop: 76,
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
        <div className="container">
            <div style={pageStyle} className="section">
                <div style={contentStyle}>
                    <header>{about.title}</header>
                    <div style={bodyAndImgContainer}>
                        <div style={bodyStyle}>
                            {about.text.split('\n').map((line: string, index: number) => (
                            <React.Fragment key={index}>
                                {line} <br />
                            </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div style={pageStyle} className="section">
                <div style={contentStyle}>
                    <header>{teamPlayer.title}</header>
                    <div style={bodyAndImgContainer}>
                        <div style={bodyStyle}>
                            {teamPlayer.text.split('\n').map((line: string, index: number) => (
                            <React.Fragment key={index}>
                                {line} <br />
                            </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div style={pageStyle} className="section">
                <div style={contentStyle}>
                    <header>{athlete.title}</header>
                    <div style={bodyAndImgContainer}>
                        <div style={bodyStyle}>
                            {athlete.description.split('\n').map((line: string, index: number) => (
                            <React.Fragment key={index}>
                                {line} <br />
                            </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
