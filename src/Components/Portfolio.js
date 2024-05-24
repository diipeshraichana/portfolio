import React, { useEffect, useState } from "react";
import Fade from "react-reveal";

let id = 0;
const Portfolio = (props) => {
  const [data, setData] = useState(props.data);

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data])

  return (
    <>
      {data?.projects &&
        <section id="portfolio">
          <Fade left duration={1000} distance="40px">
            <div className="row">
              <div className="twelve columns collapsed">
                <h1>Check Out Some of My Recent Works.</h1>
                {
                  data.projects.map(function (project) {
                    const projectImage = "images/portfolio/" + project?.image;

                    return (
                      <>
                        <div key={id++} className="six columns portfolio-item">
                          <projects id="projects">
                            <div class="container">
                              <div className="item-wrap">
                                {/* <Zmage alt={project?.title} src={projectImage} />
                              <div style={{ textAlign: "center" }}>{project?.title}</div> */}
                                <figure class="hovereffect">
                                  <img src={projectImage} alt={project?.title} class="img-responsive" />
                                  <figcaption>
                                    <h3>{project?.title}</h3>
                                    <p>{project?.description}</p>
                                    <p><strong>Tags:</strong> <br />{project?.tags}</p>
                                    {project?.url &&
                                      <>
                                        <a href={project?.url} target="_blank" rel="noreferrer">View more</a><span class="icon">
                                          <span class="fa fa-external-link"></span>
                                        </span>
                                      </>
                                    }
                                  </figcaption>
                                </figure>
                              </div>
                            </div>
                          </projects>
                        </div>
                      </>
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
