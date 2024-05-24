import { useEffect, useState } from "react";
import { Slide } from "react-reveal";

const Education = (props) => {
    const [education, setEducation] = useState(props.education);

    useEffect(() => {
        if (props.education) {
            setEducation(props.education);
        }
    }, [props.education])

    return (
        <>
            <Slide left duration={1300}>
                <div className="row education">
                    <div className="three columns header-col">
                        <h1>
                            <span>Education</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">{
                                education.map((edu) => {
                                    return (
                                        <>
                                            <div key={edu?.degree}>
                                                <h3>{edu?.school}</h3>
                                                <p className="info">
                                                    {edu?.degree} <span>&bull;</span>
                                                    <em className="date">{edu?.graduated}</em>
                                                </p>
                                                <p>{edu?.description}</p>
                                            </div>
                                        </>
                                    )
                                })
                            }</div>
                        </div>
                    </div>
                </div>
            </Slide>
        </>
    )
}
export default Education;