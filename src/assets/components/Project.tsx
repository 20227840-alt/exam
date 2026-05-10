import React, { useState } from "react";

const Projects: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const projects = [
    { title: "Prelim", url: "https://20227840-alt.github.io/first-graded-app/" },
    { title: "Midterm", url: "https://20227840-alt.github.io/MG_LAB5_LAYCO/" },
    { title: "Finals", url: "https://20227840-alt.github.io/FN_LAB1/" },
  ];

  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <button onClick={() => setSelected(project.url)}>Preview</button>
          <a href={project.url} target="_blank">Live Demo</a>
        </div>
      ))}

      {selected && (
        <div>
          <button onClick={() => setSelected(null)}>Close</button>
          <iframe
            src={selected}
            width="100%"
            height="500px"
            style={{ border: "1px solid #ccc" }}
          />
        </div>
      )}
    </div>
  );
};

export default Projects;