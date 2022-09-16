import "./ProjectCard.css";

export function ProjectCard({
  title,
  description,
  link = "#", // ADDED!
  imgSrc = "/assets/coding.jfif"
}) {
  return (
    // ADDED!
    <a className="cCLink" href={link} rel="noreferrer">
      <div className="cardContainer">
        <h3>{title}</h3>
        <p>{description}</p>
        <img alt={title} src={imgSrc} />
      </div>
    </a>
  );
}
