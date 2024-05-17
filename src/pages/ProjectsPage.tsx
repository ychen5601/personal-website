import ProjectCard from "../components/ProjectCard";
import projects from "../assets/projectsData";
import { CardActionArea } from "@mui/material";
import { useEffect, useState } from "react";
import ProjectDialog from "../components/ProjectDialog";

function ProjectsPage() {

  const [openModalId, setOpenModalId] = useState<number | null>(null);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOpen = (index: number) => {
    setOpenModalId(index);
  };

  const handleClose = () => {
    setOpenModalId(null);
  };

  const viewStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const cardContainer = {
    display: "flex",
    gap: 40,
    paddingTop: 20,
    paddingBottom: 20,
    width: 620,
    marginLeft: 10,
    marginRight: 10,
    flexWrap: "wrap" as "wrap",
  };

  const cardContainerMobile = {
    display: "flex",
    gap: 40,
    paddingTop: 20,
    paddingBottom: 20,
    width: 280,
    marginLeft: 10,
    marginRight: 10,
    flexWrap: "wrap" as "wrap",
  };

  const cardActionStyle = {
    fontFamily: "poppins",
    width: 280,
    height: 380,
    backgroundColor: "#6B5B51",
    borderRadius: 15,
    transition: "all 0.3s ease",
  };

  function getCardContainer() {
    if (width > 768) {
      return cardContainer;
    }
    return cardContainerMobile;
  }

  return (
    <div style={viewStyle}>
      <div style={getCardContainer()}>
        {projects.map((project, index) => (
          <div>
          <CardActionArea style={cardActionStyle} onClick={() => handleOpen(index)} disableRipple>
              <ProjectCard
              key={index}
              project={project}/>
          </CardActionArea>
          {openModalId === index &&
            <ProjectDialog
            open={openModalId === index}
            onClose={handleClose}
            project={project}/>}
        </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
