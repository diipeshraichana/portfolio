import React, { useEffect, useState } from "react";
import Fade from "react-reveal";

const About = (props) => {
  const [data, setData] = useState(props.data);
  const [profilePic, setProfilePic] = useState(null);
  const [years, setYears] = useState(null);

  // const name = props.data.name;
  // const street = props.data.address.street;
  // const city = props.data.address.city;
  // const state = props.data.address.state;
  // const zip = props.data.address.zip;
  // const phone = props.data.phone;
  // const email = props.data.email;
  // const resumeDownload = props.data.resumedownload;

  useEffect(() => {
    if (data) {
      setProfilePic(`images/${data?.image}`);
      const years = getDifferenceOfDate(new Date(data?.startDate), new Date());
      const age = getDifferenceOfDate(new Date(data.birthDate), new Date());
      setYears(years);
      setData({
        ...data,
        bio: data?.bio.replace("%s", years.toString()),
        age: age
      });
    }
  }, []);

  const getDifferenceOfDate = (startDate, endDate) => {
    return (endDate.getFullYear() - startDate.getFullYear());
  }

  return (
    <>
      {data && <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilePic}
                alt="Dipesh profile"
              />
              <div className="twelve columns" style={{ textAlign: "center" }}>
                <div>{`${data?.age} Years`}</div>
                <ul className="social-links" style={{ display: "inline-flex", margin: 0 }}>{
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
              <div className="row">
                <div className="columns contact-details">
                  {/* <h2>Contact Details</h2> */}
                  <p className="address">
                    {
                      data?.address && <span>
                        {/*{data?.address?.name}</span>
                    <br />
                     <span>
                      {data?.address?.street}
                      <br />*/}
                        {`${data?.address?.city}, ${data?.address?.state}, ${data?.address?.zip}`}
                      </span>
                    }
                    <br />
                    {data?.phone && <a href={`tel:${data?.phone}`}>{data?.phone}</a>}
                    <br />
                    {data?.email && <a href={`mailto:${data?.email}`}>{data?.email}</a>}
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
