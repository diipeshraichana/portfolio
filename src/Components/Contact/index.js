import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import Form from "./Form"

const Contact = (props) => {
  const [data, setData] = useState(props.data);

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data])

    // const name = this.props.data.name;
    // const street = this.props.data.address.street;
    // const city = this.props.data.address.city;
    // const state = this.props.data.address.state;
    // const zip = this.props.data.address.zip;
    // const phone = this.props.data.phone;
    // const message = this.props.data.contactmessage;

    return (
      <>
      {data && <section id="contact">
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
      }
      </>
    );
}

export default Contact;
