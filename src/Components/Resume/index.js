import React from "react";
import Work from "./Work";
import Skill from "./Skill";
import Education from "./Education";

const Resume = (props) => {
    const data = props.data;
    if (!data) return null;

    return (
        <section id="resume">
            <Education education={data.education} />
            <Work work={data.work} />
            <Skill resume={data} />
        </section>
    );
}

export default Resume;
