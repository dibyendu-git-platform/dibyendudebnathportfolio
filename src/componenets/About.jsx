import {} from 'react'

const About = () => {
    const skillsLeft = [
        {
            name: "HTML",
            pogress: 80,
            thumbnail: "../../html-logo.png"
        },
        {
            name: "CSS",
            pogress: 60,
            thumbnail: "../../css-logo.png"
        },
        {
            name: "BootStarp",
            pogress: 70,
            thumbnail: "../../bootstrap-logo.png"
        },
        {
            name: "JavaScript",
            pogress: 85,
            thumbnail: "../../js-logo.png"
        },
    ]

    const skillsRight = [
        {
            name: "React",
            pogress: 80,
            thumbnail: "../../react.svg"
        },
        {
            name: "NodeJs",
            pogress: 60,
            thumbnail: "../../nodejs-logo.png"
        },
        {
            name: "MongoDB",
            pogress: 30,
            thumbnail: "../../mongodb-logo.png"
        },
        {
            name: "SQL",
            pogress: 30,
            thumbnail: "../../postgresql-logo.png"
        },
    ]
  return (
    <section className="about teko-font" id="skills">
        <div className="container">
            <h2 className="display-5 fw-bold mb-4 text-center">Skills</h2>
            <div className="row">
                <div className="col-lg-6 col-sm-12 mt-4">
                    <ul>
                        { skillsLeft.map((skill) => 
                            (<li className='row flex-nowrap mb-2 w-100' key={skill.name}>
                                <img src={skill.thumbnail} alt="js-logo" className='img-thumbnail col-2'/>
                                <div className="pogress col-10 mt-3">
                                    <div className='d-flex justify-content-between'>
                                        <h6>{skill.name}</h6>
                                        <p>{skill.pogress}%</p>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width:`${skill.pogress}` + "%"}} aria-valuenow={skill.pogress} aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div> 
                            </li>)
                        )}
                    </ul>
                </div>
                <div className="col-lg-6 col-sm-12 mt-4">
                    <ul>
                        { skillsRight.map((skill) => 
                            (<li className='row flex-nowrap mb-2 w-100' key={skill.name}>
                                <img src={skill.thumbnail} alt="js-logo" className='img-thumbnail col-2'/>
                                <div className="pogress col-10 mt-3">
                                    <div className='d-flex justify-content-between'>
                                        <h6>{skill.name}</h6>
                                        <p>{skill.pogress}%</p>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width:`${skill.pogress}` + "%"}} aria-valuenow={skill.pogress} aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div> 
                            </li>)
                        )}
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
