import React from 'react'

function Education() {
    const educations = [
        {   
            id: 1,
            title: "Bachelor of Technology in Electrical Engineering",
            institution: "West Bengal University Of Technology",
            year: "July 2017 - Aug 2021",
            description: "Basic Electrical & Eletronics, Power systems"
        },
        {
            id: 2,
            title: "Higher Secondary Education",
            institution: "Karnajor High School",
            year: "March 2015 - March 2017",
            description: "Physics, Chemistry, Mathematics, Computer Application"
        },
        {
            id: 3,
            title: "Secendary Education",
            institution: "Sudarshanpur Dwarika Prashad Uchcha Vidyachakra",
            year: "March 2014 - March 2015",
            description: "Bengali, English, Mathematics, Science, History, Geography"
        }
    ];

  return (
    <section className="eductaion teko-font" id="educations">
        <div className="container">
            <div class="row">
                <div class="col-md-12">
                <h2 className="display-5 fw-bold mb-4">Educations</h2>
                    <div id="content">
                        <ul class="timeline">
                            {educations.map((education) => (
                                <li key={education.id} class="event" data-date={education.year}>
                                    <h3>{education.title}</h3>
                                    <p><b>Institution:</b> {education.institution}</p>
                                    <p><b>Coursework:</b> {education.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Education
