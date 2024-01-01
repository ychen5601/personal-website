import ReactPageScroller from 'react-page-scroller';

function AboutPage() {

    const scrollerContainerStyle = {
        maxHeight: 36,
    };

    const pageStyle = {
        height: "100vh",
    };

    return (
        <ReactPageScroller>
            <div style={pageStyle}>page 1</div>
            <div style={pageStyle}>page 2</div>
            <div style={pageStyle}>page 3</div>
            <div style={pageStyle}>page 4</div>
        </ReactPageScroller>
    );
}

export default AboutPage;
