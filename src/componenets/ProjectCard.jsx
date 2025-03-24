
const ProjectCard = ({title, description, link, imgPath, toolsUsed}) => {
  return (
    <div className="card">
        <img src={imgPath} className="card-img-top" alt="projectimg"/>
        <div className="card-body">
            <h5 className="card-title fw-bold">{title}</h5>
            <p className="card-text">{description}</p>
            <h6 className="fw-bold">Tools used:</h6>
            <p className="card-text">{toolsUsed}</p>
            <a href={link} className="btn btn-outline-dark">View</a>
        </div>
    </div>
  )
}

export default ProjectCard
