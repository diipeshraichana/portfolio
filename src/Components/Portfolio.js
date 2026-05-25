import React from "react";
import Fade from "react-reveal";

const Portfolio = (props) => {
  const projects = props?.data?.projects || [];

  if (projects.length === 0) return null;

  return (
    <section id="portfolio">
      <Fade left duration={1000} distance="40px">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Recent Works.</h1>
            {projects.map((project) => {
              const projectImage = `images/portfolio/${project?.image}`;

              return (
                <div className="six columns portfolio-item" key={project.title}>
                  <div id="projects">
                    <div className="container">
                      <div className="item-wrap">
                        <figure className="hovereffect">
                          <img
                            src={projectImage}
                            alt={project.title}
                            className="img-responsive"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = "images/portfolio/01.jpg";
                            }}
                          />
                          <figcaption>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <p>
                              <strong>Tags:</strong>
                              <br />
                              {project.tags}
                            </p>
                            {project.url && (
                              <>
                                <a href={project.url} target="_blank" rel="noreferrer">
                                  View more
                                </a>
                                <span className="icon">
                                  <span className="fa fa-external-link"></span>
                                </span>
                              </>
                            )}
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Portfolio;
