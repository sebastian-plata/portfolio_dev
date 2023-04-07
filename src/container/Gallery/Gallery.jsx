import React from "react";
import { Subtitle } from "../../components";
import { projects } from "../../constants/data";
import { Card } from "../../components";

import "./Gallery.css";

const Gallery = () => (
  <main id="projects" className="app__gallery" style={{ backgroundColor: "#f1f1e8" }}>
    <Subtitle title="stuff i've done"/>
    <div className="app__gallery-container">
      {projects.map((project) => (
        <Card key={project.title} {...project}/>
      ))}
    </div>
  </main>
);

export default Gallery;
