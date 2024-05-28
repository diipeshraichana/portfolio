import React, { useEffect, useState } from "react";
import Work from "./Work";
import Skill from "./Skill";
import Education from "./Education";

const Resume = (props) => {
    const [data, setData] = useState(props.data);

    useEffect(() => {
        if (data) {
            setData(data);
        }
    }, [data])

    return (
        <>
            {
                data && <section id="resume">
                    <Education education={data?.education} />
                    <Work work={data?.work} />
                    <Skill resume={data} />
                </section>
            }
        </>
    );
}

export default Resume;
