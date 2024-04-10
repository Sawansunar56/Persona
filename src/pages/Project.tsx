import project_data from "../data/projects_data";

function ProjectPage() {
  return (
    <div class="project-section content-wrapper">
      {project_data.map((category, _) => (
        <div class="category-wrapper">
          <h4>{category.category_title}</h4>
          <p>{category.category_description}</p>
          <div class="card-wrapper">
            {category.category_projects.map((project, _) => (
              <div class="card">
                <img src={project.project_img_link} alt="" />
                <div class="card-desc-wrapper">
                  <h6>{project.project_name}</h6>
                  <p>{project.project_description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectPage;
