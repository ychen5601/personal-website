import { Dialog, DialogTitle, DialogContentText } from "@mui/material";

type ProjectDialogProps = {
    open: any;
    onClose: any;
    project: any;
};

const projectDialogStyle = {
    backgroundColor: "#8b9a71",
};

const headerStyle = {
    fontFamily: "poppins",
}

const bodyStyle = {
    marginLeft: 8,
    marginRight: 8,
    paddingBottom: 8,
    fontFamily: "poppins",
}

function ProjectDialog({ open, onClose, project }: ProjectDialogProps) {
    return (
        <Dialog
          open={open}
          onClose={onClose}
          PaperProps={{style: projectDialogStyle}}
          fullWidth={true}>
            <DialogTitle style={headerStyle}>{project.title}</DialogTitle>
            <DialogContentText style={bodyStyle}>
              This is a simple description for a project that I've worked on.
              I think that the portfolio website was a great project to work on, as
              it not only demonstrates my proficiency in web development using the
              React framework, but it is also an effective demonstration of my past
              achievements, compiled in one simple website for my colleagues and peers
              to browse.
            </DialogContentText>
        </Dialog>
    );
}

export default ProjectDialog;