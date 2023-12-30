import { Dialog, DialogTitle, DialogContentText } from "@mui/material";

type ProjectDialogProps = {
    open: any;
    onClose: any;
    project: any;
};

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
}

const bodyStyle = {
    marginLeft: 16,
    marginRight: 16,
    paddingBottom: 16,
    color: "#D3D3D3",
    fontFamily: "poppins",
}

function ProjectDialog({ open, onClose, project }: ProjectDialogProps) {
    return (
        <Dialog
          open={open}
          onClose={onClose}
          PaperProps={{style: projectDialogStyle}}
          fullWidth={true}
          >
            <DialogContentText style={headerStyle}>{project.title}</DialogContentText>
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