import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ProjectsData from "../Components/Projects/Projects";
import ProjectCard from "../Components/Projects/ProjectCard";

const ProjectsFile = ProjectsData;

const Projects = () => {
  console.log(ProjectsFile);
  const mapProjects = ProjectsFile.map((project, indx) => {
    return (
      
        <ProjectCard key={project.project_name + indx} data={project} />
      
    );
  });

  return (
    <div>
      <Header />
      <div class="projectContainer">{mapProjects}</div>
      <Footer />
    </div>
  );
};

export default Projects;