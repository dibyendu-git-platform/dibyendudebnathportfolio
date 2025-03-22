import {} from 'react'

const ExpereinceSection = () => {
  return (
    <section className="services teko-font" id="experience">
        <div className="container">
            <h2 className="display-5 fw-bold mb-4">Experiences</h2>
            <div className="row">
                <div className="col-lg-12 col-sm-12 mt-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="row justify-content-between">
                                <h5 className="card-title fw-bold col-sm-3">System Engineer</h5>
                                <div className='col-sm-3'>
                                    <h6>Tata Consultancy Services</h6>
                                    <h6>Kolkata, WB; Dec 2021 - Present</h6>
                                </div>
                            </div>
                            <div className="card-text">
                                <ul>
                                  <li>Developed a dynamic application featuring an admin portal for content updates and a reporting dashboard for user insights.</li>
                                  <li>Designed and maintained responsive web pages using React, HTML, CSS, JavaScript, and templating.</li>
                                  <li>Added advanced queries to generate detailed reports, improving data-driven decision making.</li>
                                  <li>Implemented role-based access control to secure sensitive areas and ensure appropriate permissions for different types of users.</li>
                                  <li>Developed advanced Excel export/import functionalities to efficiently manage and transfer report data.</li>
                                  <li>Contributing to back-end and front-end development on client-based projects.</li>
                                  <li>Conducted thorough code reviews and debugging to ensure high-quality, secure, and bug-free application delivery.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ExpereinceSection
