import React, { useEffect, useState } from "react";
import Fade from "react-reveal";

const Footer = (props) => {
  const [data, setData] = useState(props.data);

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data]);

  return (
    <>
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">{
                data.social.map(function (network) {
                  return (
                    <li key={network.name}>
                      <a href={network.url} target="_blank" rel="noreferrer">
                        <i className={network.className}></i>
                      </a>
                    </li>
                  );
                })
              }</ul>

              <ul className="copyright">
                <li>
                  Designed by{" "}
                  <a title="Styleshout" href="http://www.styleshout.com/" blank="_target">
                    Styleshout
                  </a>
                </li>
                <li>
                  Templated by{" "}
                  <a title="Styleshout" href="https://github.com/nordicgiant2" blank="_target">
                  Nordic Giant
                  </a>
                </li>
                <li>
                  Customized by{" "}
                  <a title="Styleshout" href="https://www.linkedin.com/in/diipesh-raichana-091b6979" blank="_target">
                    {data?.name}
                  </a>
                </li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
