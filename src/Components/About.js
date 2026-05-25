import React, { useEffect, useState } from "react";
import Fade from "react-reveal";

// Calendar-year diff: matches "X+ years" convention used in the CV / meta tags.
// June 2014 → May 2026 reads as "12+ years", not 11y 11m. The dynamic value here
// must agree with the static "12+" in index.html meta + Header tagline.
const getYearsBetween = (startDate, endDate) => endDate.getFullYear() - startDate.getFullYear();

const About = (props) => {
  const [data, setData] = useState(props.data);
  const [years, setYears] = useState(null);

  useEffect(() => {
    if (!props.data) return;
    const now = new Date();
    const yearsOfExperience = getYearsBetween(new Date(props.data.startDate), now);
    const age = getYearsBetween(new Date(props.data.birthDate), now);
    setYears(yearsOfExperience);
    setData({
      ...props.data,
      bio: (props.data.bio || "").replace("%s", yearsOfExperience.toString()),
      age,
    });
  }, [props.data]);

  return (
    <>
      {data && <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={`images/${data?.image}`}
                alt={`${data?.name} — ${data?.description}`}
              />
              <div className="twelve columns" style={{ textAlign: "center" }}>
                {years != null && (
                  <div style={{ fontWeight: 600, marginTop: "10px" }}>{years}+ Years Experience</div>
                )}
                <ul className="social-links" style={{ display: "inline-flex", margin: 0, justifyContent: "center" }}>{
                  data.social.map(function (network) {
                    return (
                      <li key={network.name} style={{ padding: "0px 10px" }}>
                        <a href={network.url} target="_blank" rel="noreferrer">
                          <i className={network.className}></i>
                        </a>
                      </li>
                    );
                  })
                }</ul>
              </div>
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>{data?.bio}</p>

              {data?.availability && (
                <p className="availability-badge" aria-label="Open to opportunities">
                  <span className="availability-dot" aria-hidden="true"></span>
                  {data.availability}
                </p>
              )}

              {data?.credentials && (
                <p className="credentials">
                  <span className="credentials-label">Credentials</span>
                  <span>{data.credentials}</span>
                </p>
              )}

              <div className="row">
                <div className="columns contact-details">
                  <p className="address">
                    {data?.address && (
                      <span>
                        {[data.address.city, data.address.state, data.address.zip].filter(Boolean).join(", ")}
                      </span>
                    )}
                    <br />
                    {data?.phone && <a href={`tel:${data.phone.replace(/\s+/g, "")}`}>{data.phone}</a>}
                    <br />
                    {data?.email && <a href={`mailto:${data.email}`}>{data.email}</a>}
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={data?.resumedownload} className="button" target="_blank" download={`dipeshraichana-CV-${years}-exp`} rel="noreferrer">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
      }
    </>
  );
}

export default About;
