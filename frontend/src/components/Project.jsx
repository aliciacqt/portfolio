import { useParams } from "react-router-dom";
import ProjectImage from "./ProjectImage";
import "./project.scss";
import dataProjects from "../data/projectsAPI";

export default function Project() {
  // const [project, setProject] = useState([]);
  // const [imageList, setImageList] = useState([]);

  const { id } = useParams();

  // const project = () => {
  //   fetch(`${import.meta.env.VITE_BACKEND_URL}/api/projects/${id}`)
  //     .then((response) => response.json())
  //     .then((data) => setProject(data))
  //     .catch((err) => console.error(err));
  // };

  // useEffect(() => {
  //   getOneProject();
  // }, [id]);

  // useEffect(() => {
  //   getImages();
  // }, [id]);

  // if (!project) {
  //   return <h2>En cours de chargement...</h2>;
  // }

  return (
    <>
      <h2>{dataProjects[id].title}</h2>
      <p className="project-description">{dataProjects[id].pitch}</p>
      <p className="project-description">
        Pour en découvrir plus, consultez le{" "}
        <a href={dataProjects[id].link}>dépôt GitHub du projet</a>, ou continuez
        à parcourir cette page.
      </p>
      <p className="project-description">
        <ol className="project tech-section">
          {dataProjects[id].roles.map((role) => (
            <li className="project tech-label" key={`role-${role}`}>
              {role}
            </li>
          ))}
        </ol>
      </p>
      <section className="img-container">
        {dataProjects[id].screenshots.map((screenshot) => (
          <ProjectImage {...screenshot} key={`image-${screenshot.id}`} />
        ))}
      </section>
    </>
  );
}
