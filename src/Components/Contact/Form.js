import { useState } from "react";
import { Slide } from "react-reveal";

const Form = (props) => {
    const data = props.data;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");

    const mailtoSubject = encodeURIComponent(`${subject || "Hello"} (from portfolio site)`);
    const mailtoBody = encodeURIComponent(
        `${body}\n\n— ${name || "Visitor"}${email ? ` <${email}>` : ""}`
    );

    return (
        <div className="row">
            <Slide left duration={1000}>
                <div className="eight columns">
                    <form id="contactForm" name="contactForm" onSubmit={(e) => e.preventDefault()}>
                        <fieldset>
                            <div>
                                <label htmlFor="contactName">
                                    Name <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    size="35"
                                    id="contactName"
                                    name="name"
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="contactEmail">
                                    Email <span className="required">*</span>
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    size="35"
                                    id="contactEmail"
                                    name="email"
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="contactSubject">
                                    Subject <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={subject}
                                    size="35"
                                    id="contactSubject"
                                    name="subject"
                                    onChange={(event) => setSubject(event.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="contactMessage">
                                    Message <span className="required">*</span>
                                </label>
                                <textarea
                                    value={body}
                                    cols="50"
                                    rows="15"
                                    id="contactMessage"
                                    name="body"
                                    onChange={(event) => setBody(event.target.value)}
                                ></textarea>
                            </div>

                            <div>
                                <a
                                    href={`mailto:${data?.email}?subject=${mailtoSubject}&body=${mailtoBody}`}
                                    className="submit"
                                >
                                    Send via Email
                                </a>
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
                            {data?.address && (
                                <>
                                    {[data.address.city, data.address.state, data.address.zip]
                                        .filter(Boolean)
                                        .join(", ")}
                                    <br />
                                </>
                            )}
                            {data?.phone && (
                                <>
                                    <a href={`tel:${data.phone.replace(/\s+/g, "")}`}>{data.phone}</a>
                                    <br />
                                </>
                            )}
                            {data?.email && <a href={`mailto:${data.email}`}>{data.email}</a>}
                        </p>
                    </div>
                    {data?.availability && (
                        <div className="widget widget_contact">
                            <h4>Availability</h4>
                            <p className="availability-text">{data.availability}</p>
                        </div>
                    )}
                </aside>
            </Slide>
        </div>
    );
};

export default Form;
