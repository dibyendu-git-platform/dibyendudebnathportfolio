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
                        <a href="#"><i className="bi bi-twitter"></i></a>
                        <a href="#"><i className="bi bi-instagram"></i></a>
                        <a href="#"><i className="bi bi-facebook"></i></a>
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
