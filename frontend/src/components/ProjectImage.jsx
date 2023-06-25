import PropTypes from "prop-types";

export default function ProjectImage({ image, title, deviceName }) {
  return (
    <img
      src={image}
      alt={`${title} screenshot`}
      className={`${deviceName} screenshot`}
    />
  );
}

ProjectImage.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  deviceName: PropTypes.string.isRequired,
};
