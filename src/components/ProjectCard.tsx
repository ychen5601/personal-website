import { useState } from 'react';
import { CardMedia, IconButton, CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';


type ProjectCardProps = {
    project: any,
};

function ProjectCard({ project }: ProjectCardProps) {

    const [raised, setRaised] = useState(false);

    const cardStyle = {
        width: 280,
        height: 380,
        backgroundColor: "#6B5B51",
        borderRadius: 15,
        transition: "all 0.3s ease",
        transform: raised ? 'scale(1.03)' : 'scale(1)'
    };

    const imageContainerStyle = {
        paddingTop: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    const imageStyle = {
        borderRadius: 100,
        height: 200,
        width: 200,
    };

    const headerStyle = {
        paddingTop: 20,
        fontSize: 20,
        color: "#DDDAD3",
        marginLeft: 8,
    };

    const bodyStyle = {
        color: "#DDDAD3",
        fontSize: 16,
        marginLeft: 8,
        marginRight: 8,
    }

    return (
        <Card 
        style={cardStyle}
        elevation={raised ? 10 : 0}
        onMouseEnter={() => setRaised(true)}
        onMouseLeave={() => setRaised(false)}
        onMouseDown={() => setRaised(false)}
        onMouseUp={() => setRaised(true)}
        >
            <div style={imageContainerStyle}>
                <CardMedia
                    component="img"
                    image={project.imageUrl}
                    alt={project.title}
                    style={imageStyle}/>
            </div>
            <header style={headerStyle}>
                {project.title}
            </header>
            <p style={bodyStyle}>
                {project.shortDesc}
            </p>
      </Card>
    );
}

export default ProjectCard;
