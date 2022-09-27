import "./Footer.css";
export default function Footer() {
  const date = new Date();
  var year = date.getFullYear();

  return (
    <section className="footer">
      <div>
        <h4 className="contact">Contact us at :</h4>
      </div>
      <div className="contact-icon-container">
        <a href="#" className="fab fa-facebook footer-icon" />
        <a href="#" className="fab fa-twitter footer-icon" />
        <a href="#" className="fab fa-instagram footer-icon" />
        <a href="#" className="fab fa-linkedin footer-icon" />
      </div>
      <p className="copyright">
        Copyright ©️ {year} National Instiute of Technology, Hamirpur
      </p>
    </section>
  );
}
