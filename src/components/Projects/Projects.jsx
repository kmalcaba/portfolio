import "./Projects.scss";
import ProjectCard from "../ProjectCard/ProjectCard";

function Projects() {
  const project = {
    title: "Project Title",
    tags: ["ReactJS", "HTML/CSS"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium officiis qui ad consectetur quos dolorem consequatur exercitationem fugit debitis repudiandae placeat aperiam, iste animi laboriosam! Porro laborum vel possimus recusandae?",
    previewLink: "/",
    sourceLink: "/",
  };

  return (
    <section className="projects">
      {
        // TODO: Add filtering logic here
      }
      <ProjectCard project={project} />
      <ProjectCard project={project} />
    </section>
  );
}
export default Projects;
