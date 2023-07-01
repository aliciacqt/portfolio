import PropTypes from "prop-types";
import dataProjects from "../data/projectsAPI";

export default function ProjectImage({ ...screenshot }) {
  return (
    <img
      src={screenshot.url}
      alt={`${dataProjects.title} screenshot`}
      className={`${screenshot.device} screenshot`}
    />
  );
}

ProjectImage.defaultProps = {
  screenshot: "",
};

ProjectImage.propTypes = {
  screenshot: PropTypes.string,
};
