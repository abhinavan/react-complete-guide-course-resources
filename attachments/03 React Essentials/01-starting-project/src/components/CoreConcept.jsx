import "./css/CoreConcepts.css";

const CoreConcept = ({ image, title, description }) => {
  return (
    <div>
      <ul>
        <img src={image} alt="..."></img>
        <h3>{title}</h3>
        <p>{description}</p>
      </ul>
    </div>
  );
};

export default CoreConcept;
