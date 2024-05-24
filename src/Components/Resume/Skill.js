import { useEffect, useState } from "react";
import { Slide } from "react-reveal"

const Skill = (props) => {
    const [skills, setSkills] = useState(props?.resume?.skills);
    const [tools, setTools] = useState(props?.resume?.tools);
    const [skillMessage, setSkillsMessage] = useState(props?.resume?.skillmessage);
    const [toolsMessage, setToolsMessage] = useState(props?.resume?.toolmessage);

    useEffect(() => {
        if (props?.resume?.skills) {
            setSkills(props?.resume?.skills);
        }
    }, [props?.resume?.skills]);


    useEffect(() => {
        if (props?.resume?.skillmessage) {
            setSkillsMessage(props?.resume?.skillmessage);
        }
        console.log(props?.resume?.skillmessage)
    }, [props?.resume?.skillmessage]);

    useEffect(() => {
        if (props?.resume?.tools) {
            setTools(props?.resume?.tools);
        }
    }, [props?.resume?.tools]);


    useEffect(() => {
        if (props?.resume?.toolmessage) {
            setToolsMessage(props?.resume?.toolmessage);
        }
    }, [props?.resume?.toolmessage]);

    // const getRandomColor = () => {
    //     let letters = "0123456789ABCDEF";
    //     let color = "#";
    //     for (let i = 0; i < 6; i++) {
    //         color += letters[Math.floor(Math.random() * 16)];
    //     }
    //     return color;
    // }

    return (
        <>
            <Slide left duration={1300}>
                <div className="row skill">
                    <div className="six columns header-col">
                        <h1>
                            <span>Skills</span>
                        </h1>
                        <p>{skillMessage}</p>

                        {skills && <div>
                            <ul className="skills">{
                                skills.map((skill) => {
                                    // const backgroundColor = getRandomColor();
                                    // const className = "bar-expand " + skill.name.toLowerCase();
                                    // const width = skill.level;
                                    const width = skill.level;

                                    return (
                                        <>
                                            {/* <li key={skill.name}>
                                                <span style={{ width, backgroundColor }} className={className}></span>
                                                <em>{skill.name}</em>
                                            </li> */}

                                            <li key={skill.name}>
                                                <div style={{ fontSize: "18px", width: "10px", display: "inline" }}><em>{skill.name}</em></div>
                                                <div style={{ float: "right" }}>
                                                <span className={`fa fa-star ${width >= 1 ? 'filled' : ''}`}></span>
                                                <span className={`fa fa-star ${width >= 2 ? 'filled' : ''}`}></span>
                                                <span className={`fa fa-star ${width >= 3 ? 'filled' : ''}`}></span>
                                                <span className={`fa fa-star ${width >= 4 ? 'filled' : ''}`}></span>
                                                <span className={`fa fa-star ${width >= 5 ? 'filled' : ''}`}></span>
                                                <span className={`fa fa-star ${width >= 6 ? 'filled' : ''}`}></span>
                                                <span className={`fa fa-star ${width >= 7 ? 'filled' : ''}`}></span>
                                                <span className={`fa fa-star ${width >= 8 ? 'filled' : ''}`}></span>
                                                <span className={`fa fa-star ${width >= 9 ? 'filled' : ''}`}></span>
                                                <span className={`fa fa-star ${width >= 10 ? 'filled' : ''}`}></span>
                                                </div>
                                            </li>
                                        </>
                                    )
                                })
                            }</ul>
                        </div>}
                    </div>
                    <div className="six columns header-col">
                        <h1>
                            <span>Tools</span>
                        </h1>
                        <p>{toolsMessage}</p>

                        {tools && <div>
                            <ul className="tools">{
                                tools.map((tool) => {
                                    const width = tool.level;
                                    return (
                                        <>
                                            <li key={tool.name}>
                                            <div style={{ fontSize: "18px", width: "10px", display: "inline" }}><em>{tool.name}</em></div>
                                                <div style={{ float: "right" }}>
                                                <span className={`fa fa-star ${width >= 1 ? 'filled' : ''}`}></span>
                                                <span className={`fa fa-star ${width >= 2 ? 'filled' : ''}`}></span>
                                                <span className={`fa fa-star ${width >= 3 ? 'filled' : ''}`}></span>
                                                <span className={`fa fa-star ${width >= 4 ? 'filled' : ''}`}></span>
                                                <span className={`fa fa-star ${width >= 5 ? 'filled' : ''}`}></span>
                                                <span className={`fa fa-star ${width >= 6 ? 'filled' : ''}`}></span>
                                                <span className={`fa fa-star ${width >= 7 ? 'filled' : ''}`}></span>
                                                <span className={`fa fa-star ${width >= 8 ? 'filled' : ''}`}></span>
                                                <span className={`fa fa-star ${width >= 9 ? 'filled' : ''}`}></span>
                                                <span className={`fa fa-star ${width >= 10 ? 'filled' : ''}`}></span>
                                                </div>
                                            </li>
                                        </>
                                    )
                                })
                            }</ul>
                        </div>}
                    </div>
                </div>
            </Slide>
        </>
    )
}
export default Skill;
