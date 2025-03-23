
const ProjectCard = ({title, description, link}) => {
  return (
    <div className="card">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title fw-bold">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={link} className="btn btn-outline-dark">Go somewhere</a>
        </div>
    </div>
  )
}

export default ProjectCard
