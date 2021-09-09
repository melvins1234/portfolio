import "./styles/Contacts.css";
import qoute from "../images/left-qoute.svg";
const Contacts = () => {
  return (
    <div className="touch" id="contacts">
      <div className="container">
        <div className="touch-wrapper">
          <img src={qoute} alt="" />
          <h1>
            Need a front-end <span>developer ?</span>{" "}
          </h1>
          <h3>
            Let's <span>work</span> together !!
          </h3>
          <div className="message">
            <small>
              " Hi, my name is <span>Melvin Baybayanon</span> and I'm a
              front-end developer. If you think i could help your business, just
              contact me. "
            </small>
          </div>
          <div className="contact-details">
            <a
              href="https://www.facebook.com/binbin.nivlem/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex">
                <i className="fab fa-facebook-f"></i>
              </div>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=melvsbaybayanon@gmail.com&su=Front End Developer"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex">
                <i className="fas fa-envelope"></i>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/melvin-baybayanon/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex">
                <i className="fab fa-linkedin-in"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
