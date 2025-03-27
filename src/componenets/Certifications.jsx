import CertificateCard from "./CertificateCard"
import Carousel from 'react-bootstrap/Carousel';

const Certifications = () => {
    const certifications = [
        {
            id: 1,
            name: "Associate Cloud Engineer",
            organization: "Google",
            description: "Focuses on deploying, managing, and monitoring applications in Google Cloud. Covers IAM, networking, storage, and compute services.",
            imgPath: "../google-cloud.png",
            link: ''
        },
        {
            id: 2,
            name: "GitHub Foundations",
            organization: "GitHub",
            description: "Version Control Basics, GitHub Repositories, Collaboration & Pull Requests, GitHub Actions & Automation, Security & Best Practices,GitHub CLI & Advanced Features",
            imgPath: "../github-foundations.jpg",
            link: ''
        },
        {
            id: 3,
            name: "Associate Web Developer(Outsystems)",
            organization: "Outsystems",
            description: "Fundamentals of OutSystems web and mobile app development. Targeted for developers who are new to OutSystems Developer Cloud and develop simple web and mobile apps.",
            imgPath: "../outsystems-logo.png",
            link: ''
        },
        {
            id: 4,
            name: "Python (Basic) Certificate",
            organization: "HackerRank",
            description: "It covers topics like Scalar Types, Operators and Control Flow, Strings, Collections and Iteration, Modularity, Objects and Types and Classes.",
            imgPath: "../python-logo.png",
            link: ''
        },
        {
            id: 5,
            name: "React (Basic) Certificate",
            organization: "HackerRank",
            description: "React (Basic) It covers topics like Basic Routing, Rendering Elements,State Management (Internal Component State), Handling Events, ES6 and JavaScript and Form Validation.",
            imgPath: "../react.svg",
            link: ''
        },
    ]
  return (
        <section className="testimonials teko-font" id="testimonials">
            <div className="container text-center">
                <h2 className="display-5 fw-bold mb-4">Certifications & Achievements</h2>
                <Carousel>
                    { certifications.map((item) => (
                      <Carousel.Item key={item.id}>
                        <CertificateCard  title ={item.name} tag = {item.organization} body = {item.description} imgPath = {item.imgPath} link={item.link}/>
                      </Carousel.Item>) 
                    )}
                </Carousel>
            </div>
        </section>
  )
}

export default Certifications
