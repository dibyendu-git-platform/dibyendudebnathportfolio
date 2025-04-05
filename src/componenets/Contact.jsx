import "bootstrap-icons/font/bootstrap-icons.css"

const Contact = () => {
  return (
    <section className="contact teko-font" id="contact">
        <div className="container">
            <h2 className="display-5 fw-bold mb-4">Contact Me</h2>
            <div className="row">
                <div className="col-sm-4 mt-4">
                    <a href="mailto:dibyendu.nir@gmail.com">dibyendu.nir@gmail.com</a>
                </div>
                <div className="col-sm-4 mt-4">
                    <div className="social-media">
                        <a href="https://github.com/dibyendu-git-platform"><i className="bi bi-github"></i></a>
                        <a href="https://www.linkedin.com/in/dibyendu-debnath-57814a326"><i className="bi bi-linkedin"></i></a>
                        <a href="https://www.facebook.com/share/18ZbsA6gQz"/><i className="bi bi-facebook"></i></a>
                    </div>
                </div>
                <div className="col-sm-4 mt-4">
                    <a href="tel:8637369683">+91 8637369683</a>
                </div>
            </div>
          </div>
      </section>
  )
}

export default Contact
