import { useEffect, useState } from "react";
import { Slide } from "react-reveal";
import LinkedInPosts from "./LinkedInPosts";

const Form = (props) => {
    const [data, setData] = useState(props.data);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");
    
    useEffect(() => {
        if (data) {
            setData(data);
        }
    }, [data]);

    return (
        <>
            <div className="row">
                <Slide left duration={1000}>
                    <div className="eight columns">
                        <form action="" method="post" id="contactForm" name="contactForm">
                            <fieldset>
                                <div>
                                    <label htmlFor="contactName">
                                        Name <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue={name || ""}
                                        size="35"
                                        id="contactName"
                                        name="name"
                                        onChange={(event) => {
                                            if(event.target.value) {
                                                setName(event.target.value);
                                            }
                                        }
                                    }
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contactEmail">
                                        Email <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue={email || ""}
                                        size="35"
                                        id="email"
                                        name="email"
                                        onChange={(event) => {
                                            if(event.target.value) {
                                                setEmail(event.target.value);
                                            }
                                        }
                                    }
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contactSubject">
                                        Subject <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue={subject || ""}
                                        size="35"
                                        id="contactSubject"
                                        name="subject"
                                        onChange={(event) => {
                                            if(event.target.value) {
                                                setSubject(event.target.value);
                                            }
                                        }
                                    }
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contactMessage">
                                        Message <span className="required">*</span>
                                    </label>
                                    <textarea
                                        defaultValue={body || ""}
                                        cols="50"
                                        rows="15"
                                        id="contactMessage"
                                        name="body"
                                        onChange={(event) => {
                                            if(event.target.value) {
                                                setBody(event.target.value);
                                            }
                                        }
                                    }
                                    ></textarea>
                                </div>

                                <div>
                                    {/* <button className="submit" onClick={handleSubmit}>Submit</button> */}
                                    <a href={`mailto:${data?.email}?subject=${subject} (From Website)&body=${body}`} className="submit" type="button">Submit</a>
                                    {/* <span id="image-loader">
                                        <img alt="" src="images/loader.gif" />
                                    </span> */}
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </Slide>

                <Slide right duration={1000}>
                    <aside className="four columns footer-widgets">
                        <div className="widget widget_contact">
                            <h4>Address and Phone</h4>
                            <p className="address">
                                {/* {data?.name}
                                <br /> */}
                                {data?.address?.street} <br />
                                {`${data?.address?.city}, ${data?.address?.state}, ${data?.address?.zip}`}
                                <br />
                                {data?.phone && <a href={`tel:${data?.phone}`}>{data?.phone}</a>}
                                <br />
                                {data?.email && <a href={`mailto:${data?.email}`}>{data?.email}</a>}
                            </p>
                        </div>
                        <LinkedInPosts></LinkedInPosts>
                    </aside>
                </Slide>
            </div>
        </>
    )
}
export default Form;