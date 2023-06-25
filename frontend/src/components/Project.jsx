import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectImage from "./ProjectImage";
import "./project.scss";

export default function Project() {
  const [project, setProject] = useState([]);
  const [imageList, setImageList] = useState([]);

  const { id } = useParams();

  const getOneProject = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/projects/${id}`)
      .then((response) => response.json())
      .then((data) => setProject(data))
      .catch((err) => console.error(err));
  };

  const getImages = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/images/${id}`)
      .then((response) => response.json())
      .then((data) => setImageList(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getOneProject();
  }, [id]);

  useEffect(() => {
    getImages();
  }, [id]);

  if (!project) {
    return <h2>En cours de chargement...</h2>;
  }
  return (
    <>
      <h2>{project.title}</h2>
      <p className="project-description">{project.pitch}</p>
      <p className="project-description">
        Pour en découvrir plus, consultez le{" "}
        <a href={project.link}>dépôt GitHub du projet</a>, ou continuez à
        parcourir cette page.
      </p>
      <section className="img-container">
        {imageList.map((image) => (
          <ProjectImage {...image} key={`image-${image.id}`} />
        ))}
      </section>
    </>
  );
}
