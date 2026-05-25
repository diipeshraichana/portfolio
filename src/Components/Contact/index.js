import React from "react";
import { Fade } from "react-reveal";
import Form from "./Form";

const Contact = (props) => {
  const data = props.data;
  if (!data) return null;

  return (
    <section id="contact">
      <Fade bottom duration={1000}>
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{data.contactmessage}</p>
          </div>
        </div>
      </Fade>
      <Form data={data} />
    </section>
  );
};

export default Contact;
