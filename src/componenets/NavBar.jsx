import {} from 'react'

const NavBar = () => {
    const navLinks = [
        {
            name: "Intro",
            href: "#hero"
        },
        {
            name: "Experience",
            href: "#experience"
        },
        {
            name: "Skills",
            href: "#skills"
        },
        {
            name: "Projects",
            href: "#hero"
        },
        {
            name: "Certifications & Achievements",
            href: "#hero"
        },
        {
            name: "Educations",
            href: "#hero"
        },
    ]
  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-sm teko-font">
        <div className="container-fluid">
            <a className="navbar-brand pacifico-regular" href="#">Dibyendu Debnath</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    { navLinks.map((link) => 
                        (<li className="nav-item" key={link.name}>
                            <a className="nav-link active" aria-current="page" href={link.href}>{link.name}</a>
                        </li>)
                    )}
                </ul>
                <a className="btn btn-outline-dark d-none d-lg-block" href="#">Let's Talk</a>
            </div>
        </div>
    </nav>
  )
}

export default NavBar
