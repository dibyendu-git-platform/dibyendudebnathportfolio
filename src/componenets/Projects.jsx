import {} from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    const myProjects = [
        {
            id: 1,
            title: "Card title",
            description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
            link: '/#'
        },
        {
            id: 2,
            title: "Card title",
            description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
            link: '/#'
        },
        {
            id: 3,
            title: "Card title",
            description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
            link: '/#'
        },
        {
            id: 4,
            title: "Card title",
            description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
            link: '/#'
        },
        {
            id: 5,
            title: "Card title",
            description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
            link: '/#'
        },
        {
            id: 6,
            title: "Card title",
            description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
            link: '/#'
        }
    ]

  return (
    <section className="projects" id="projects">
        <div className="container">
            <h2 className="display-5 fw-bold mb-4">Projects</h2>
            <div className="row">
                { myProjects.map((project) => (
                    <div className="col-lg-4 col-sm-6 mt-4" key={project.id}>
                        <ProjectCard title={project.title} description={project.description} link={project.link}/>
                    </div>) 
                )}
            </div>
        </div>
    </section>
  )
}

export default Projects
