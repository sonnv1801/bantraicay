import { Link } from "react-router-dom";
export default function SectionSocialNetwork() {
  return (
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      <div>
        <Link to="#!" className="me-4 text-reset">
          <i className="fab fa-facebook-f"></i>
        </Link>
        <Link to="#!" className="me-4 text-reset">
          <i className="fab fa-twitter"></i>
        </Link>
        <Link to="#!" className="me-4 text-reset">
          <i className="fab fa-google"></i>
        </Link>
        <Link to="#!" className="me-4 text-reset">
          <i className="fab fa-instagram"></i>
        </Link>
        <Link to="#!" className="me-4 text-reset">
          <i className="fab fa-linkedin"></i>
        </Link>
        <Link to="#!" className="me-4 text-reset">
          <i className="fab fa-github"></i>
        </Link>
      </div>
    </section>
  );
}
