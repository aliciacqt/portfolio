import "./contact.scss";
import myCV from "../assets/CV_Alicia_Coquérant.pdf";

export default function Contact() {
  return (
    <>
      <h2>Contactez-moi</h2>
      <p className="contact-page">
        Vous pouvez consulter{" "}
        <a href={myCV} className="contact-link">
          mon CV ici
        </a>
        .
      </p>
      <p className="contact-page">
        Restons en contact grâce à{" "}
        <a
          href="https://www.linkedin.com/in/alicia-coqu%C3%A9rant-90a06560/"
          className="contact-link"
        >
          LinkedIn
        </a>{" "}
        et{" "}
        <a href="https://github.com/aliciacqt" className="contact-link">
          GitHub
        </a>{" "}
        !
      </p>
    </>
  );
}
