import {} from 'react'

const HeroSection = () => {
  return (
      <section className="hero teko-font" id="hero">
        <div className="container-lg">
            <div className="row align-items-center">
                <div className="col-sm-6">
                    <h1 className="display-4 fw-bold">Dibyendu Debnath</h1>
                    <p>Associate Web Developer with 3 years of experience in building scalable, responsive web applications using
                        React.js, Outsystems, and Node.js. Proficient in both front-end and back-end development, with a strong focus
                        on enhancing user experience and optimizing code performance.
                    </p>
                    <button className="btn btn-outline-dark btn-lg">Projects</button>
                </div>
                <div className="col-sm-6 text-center">
                    <img src="../../newimg.png" className="img-fluid" alt="img" />
                </div>
            </div>
        </div>
      </section>
  )
}

export default HeroSection
