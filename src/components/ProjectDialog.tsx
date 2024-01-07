import { Dialog, DialogContent, DialogContentText, IconButton } from "@mui/material";
import React from "react";
import GithubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkIcon from '@mui/icons-material/Link';

type ProjectDialogProps = {
    open: any;
    onClose: any;
    project: any;
};

function ProjectDialog({ open, onClose, project }: ProjectDialogProps) {

    const githubUrlExists = project.githubUrl != null;
    const youtubeUrlExists = project.youtubeUrl != null;
    const otherUrlExists = project.otherUrl != null;

    const projectDialogStyle = {
        backgroundColor: "#45503b",
    };
    
    const headerStyle = {
        fontFamily: "poppins",
        marginLeft: 16,
        marginRight: 16,
        paddingTop: 16,
        paddingBottom: 16,
        fontSize: 24,
        color: "#D3D3D3"
    };
    
    const bodyStyle = {
        marginLeft: 16,
        marginRight: 16,
        display: "flex",
        color: "#D3D3D3",
        fontFamily: "poppins",
    };
    
    const iconContainerStyle = {
        paddingTop: 16,
        height: 36,
        padding: 8,
        display: "flex",
        justifyContent: "flex-start",
    };

    const iconStyle = {
        color: "#d3d3d3",
    }

    return (
        <Dialog
          open={open}
          onClose={onClose}
          PaperProps={{style: projectDialogStyle}}
          fullWidth={true}
          >
            <DialogContentText style={headerStyle}>{project.title}</DialogContentText>
            <DialogContentText style={bodyStyle}>
              {project.longDesc.split('\n').map((line: string, index: number) => (
                <React.Fragment key={index}>
                    {line} <br />
                </React.Fragment>
              ))}
            </DialogContentText>
            <DialogContent style={iconContainerStyle}>
            {
                githubUrlExists && 
                <IconButton style={iconStyle} href={project.githubUrl} target="_blank">
                    <GithubIcon/>
                </IconButton>
               
            }
            {
                youtubeUrlExists && 
                <IconButton style={iconStyle} href={project.youtubeUrl} target="_blank">
                    <YouTubeIcon/>
                </IconButton>
               
            }
            {
                otherUrlExists && 
                <IconButton style={iconStyle} href={project.otherUrl} target="_blank">
                    <LinkIcon/>
                </IconButton>
               
            }
            </DialogContent>
        </Dialog>
    );
}

export default ProjectDialog;
