import { Dialog, DialogContent, DialogContentText, IconButton } from "@mui/material";
import React from "react";
import GithubIcon from "@mui/icons-material/GitHub";

type ProjectDialogProps = {
    open: any;
    onClose: any;
    project: any;
};

function ProjectDialog({ open, onClose, project }: ProjectDialogProps) {

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
                <IconButton style={iconStyle} href={project.githubUrl} target="_blank">
                    <GithubIcon/>
                </IconButton>
            </DialogContent>
        </Dialog>
    );
}

export default ProjectDialog;
