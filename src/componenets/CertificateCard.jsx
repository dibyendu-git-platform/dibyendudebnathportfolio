
const CertificateCard = ({title ='', tag = '', body = '', imgPath = '/', link='/'}) => {
  return (
    <div className="card w-50">
        <img src={imgPath} alt="" className="" />
        <div className="card-body">
            <h5 className="card-title fw-bold h3">{title}</h5>
            <h6 className="h4">{tag}</h6>
            <p className="card-text">{body}</p>
            <a href={link} className="text-primary">View Certificate <i className="bi bi-box-arrow-up-right"></i></a>
        </div>
    </div>
  )
}

export default CertificateCard