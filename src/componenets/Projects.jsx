import {} from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    const myProjects = [
        {
            id: 1,
            title: "Simple Book Store App",
            description: `Build a simple book store app where the user buys books, an admin panel to add an edit book and price, and an admin dashboard to show sale data.`,
            toolsUsed: 'React JS, Node JS, MongoDB, Firebase authentication, Tailwind CSS, JWT',
            link: '/#',
            imgPath: '../../bookStore-cover.png'
        },
        {
            id: 2,
            title: "Blog App",
            description: `Build a personal blog app where user can create,update and delete own posts and view other posts`,
            toolsUsed: 'React JS, Node JS, MongoDB, Firebase authentication, Tailwind CSS, JWT',
            link: 'https://github.com/dibyendu-git-platform/blog-app',
            imgPath: '../../blog-app.jpg'
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: `Portfolio website, built with HTML, CSS, Bootstrap, and React, features a responsive design, dynamic React components and showcases my projects, skills, and contact details. 🚀`,
            toolsUsed: 'HTML, CSS, Bootstrap, React',
            link: 'https://github.com/dibyendu-git-platform/dibyendudebnathportfolio/',
            imgPath: '../../Portfolio.png'
        }
    ]

  return (
    <section className="projects teko-font" id="projects">
        <div className="container">
            <h2 className="display-5 fw-bold mb-4">Projects</h2>
            <div className="row">
                { myProjects.map((project) => (
                    <div className="col-lg-4 col-sm-6 mt-4" key={project.id}>
                        <ProjectCard title={project.title} description={project.description} link={project.link} imgPath={project.imgPath} toolsUsed={project?.toolsUsed}/>
                    </div>) 
                )}
            </div>
        </div>
    </section>
  )
}

export default Projects
