// src/data/projects.js
const projectPaths = async () => {
  const projectPaths = import.meta.glob('../../src/data/projects/*/index.md');
  const projects = [];
  console.log(projectPaths);

  for (const projectPath in projectPaths) {
    projects.push({
      path: projectPath,
    });
  }
  console.log(projects);

  return projects;
};

export default projectPaths;
