import React from "react";
import Fade from "react-reveal";

const Footer = (props) => {
  const data = props.data;

  if (!data) return null;

  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="row">
        <Fade bottom>
          <div className="twelve columns">
            <ul className="social-links">{
              data.social.map((network) => (
                <li key={network.name}>
                  <a href={network.url} target="_blank" rel="noreferrer" aria-label={network.name}>
                    <i className={network.className}></i>
                  </a>
                </li>
              ))
            }</ul>

            <ul className="copyright">
              <li>&copy; {currentYear} {data?.name}. All rights reserved.</li>
              <li>
                Designed by{" "}
                <a title="Styleshout" href="http://www.styleshout.com/" target="_blank" rel="noreferrer">
                  Styleshout
                </a>
              </li>
              <li>
                Templated by{" "}
                <a title="Nordic Giant" href="https://github.com/nordicgiant2" target="_blank" rel="noreferrer">
                  Nordic Giant
                </a>
              </li>
              <li>
                Customized by{" "}
                <a title={data?.name} href="https://www.linkedin.com/in/diipesh-raichana-091b6979" target="_blank" rel="noreferrer">
                  {data?.name}
                </a>
              </li>
            </ul>
          </div>
          <div className="twelve columns" style={{ textAlign: "center", marginTop: "10px" }}>
            <a href="https://diipeshraichana.github.io/portfolio-v1/" target="_blank" rel="noreferrer">Old Portfolio</a>
          </div>
        </Fade>

        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
