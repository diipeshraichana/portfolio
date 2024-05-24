import { useEffect, useState } from "react";
import { Slide } from "react-reveal"

const Work = (props) => {
    const [work, setWork] = useState(props.work);

    useEffect(() => {
        if (props.work) {
            setWork(props.work);
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
                        work.map((work) => {
                            return (
                                <>
                                    <div key={work?.years}>
                                        <h3>{work?.company}</h3>
                                        <p className="info">
                                            {work?.title} <span>&bull;</span>
                                            <em className="date">{work?.years}</em>
                                        </p>
                                        <p>{work?.description}</p>
                                    </div>
                                </>
                            )
                        })
                    }</div>
                </div>
            </Slide>
        </>
    )
}
export default Work;
