import React, { useEffect, useState } from "react";
import Fade from "react-reveal";

let id = 0;
const Portfolio = (props) => {
  const [data, setData] = useState(props.data);

  useEffect((data) => {
    if (data) {
      setData(data);
    }
  }, [])

  return (
    <>
      {data?.projects &&
        <section id="portfolio">
          <Fade left duration={1000} distance="40px">
            <div className="row">
              <div className="twelve columns collapsed" key={id++}>
                <h1>Check Out Some of My Recent Works.</h1>
                {
                  data.projects.map(function (project) {
                    const projectImage = "images/portfolio/" + project?.image;

                    return (
                      <React.Fragment key={project?.title}>
                        <div className="six columns portfolio-item">
                          <div id="projects">
                            <div className="container">
                              <div className="item-wrap">
                                {/* <Zmage alt={project?.title} src={projectImage} />
                              <div style={{ textAlign: "center" }}>{project?.title}</div> */}
                                <figure className="hovereffect">
                                  <img src={projectImage} alt={project?.title} className="img-responsive" />
                                  <figcaption>
                                    <h3>{project?.title}</h3>
                                    <p>{project?.description}</p>
                                    <p><strong>Tags:</strong> <br />{project?.tags}</p>
                                    {project?.url &&
                                      <>
                                        <a href={project?.url} target="_blank" rel="noreferrer">View more</a>
                                        <span className="icon">
                                          <span className="fa fa-external-link"></span>
                                        </span>
                                      </>
                                    }
                                  </figcaption>
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })
                }
              </div>
            </div>
          </Fade >
        </section >

      }
    </>
  );
}

export default Portfolio;
