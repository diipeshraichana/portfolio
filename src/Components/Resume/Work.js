import React, { useEffect, useState } from "react";
import { Slide } from "react-reveal"

const Work = (props) => {
    const [workObj, setWorkObj] = useState(props.work);

    useEffect(() => {
        if (props.work) {
            setWorkObj(props.work);
        }
    }, [props.work])

    return (
        <>
            <Slide left duration={1300}>
                <div className="row work">
                    <div className="three columns header-col">
                        <h1>
                            <span>Work</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">{
                        workObj.map((work) => {
                            return (
                                <React.Fragment key={work?.years}>
                                    <div key={work?.years}>
                                        <h3>{work?.company}</h3>
                                        <p className="info">
                                            {work?.title} <span>&bull;</span>
                                            <em className="date">{work?.years}</em>
                                        </p>
                                        <p>{work?.description}</p>
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }</div>
                </div>
            </Slide>
        </>
    )
}
export default Work;
