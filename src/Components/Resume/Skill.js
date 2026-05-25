import React from "react";
import { Slide } from "react-reveal";

const GROUP_LABELS = {
    daily: "Daily",
    recent: "Recent",
    earlier: "Earlier",
};
const GROUP_ORDER = ["daily", "recent", "earlier"];

const Pills = ({ items, variant }) => (
    <ul className={`skill-pills variant-${variant}`}>
        {items.map((name) => (
            <li key={name} className="skill-pill">{name}</li>
        ))}
    </ul>
);

const SkillGroup = ({ groupKey, items }) => {
    if (!items || items.length === 0) return null;
    return (
        <div className="skill-group">
            <span className={`skill-group-label group-${groupKey}`}>
                {GROUP_LABELS[groupKey] || groupKey}
            </span>
            <Pills items={items} variant={groupKey} />
        </div>
    );
};

const normaliseSkills = (skills) => {
    if (!skills) return [];
    if (Array.isArray(skills)) {
        return [{ key: "all", items: skills.map((s) => (typeof s === "string" ? s : s.name)) }];
    }
    return GROUP_ORDER
        .filter((key) => Array.isArray(skills[key]) && skills[key].length > 0)
        .map((key) => ({ key, items: skills[key] }));
};

const normaliseTools = (tools) =>
    (tools || []).map((t) => (typeof t === "string" ? t : t.name));

const Skill = (props) => {
    const skillGroups = normaliseSkills(props?.resume?.skills);
    const tools = normaliseTools(props?.resume?.tools);
    const skillMessage = props?.resume?.skillmessage;
    const toolsMessage = props?.resume?.toolmessage;

    return (
        <Slide left duration={1300}>
            <div className="row skill">
                <div className="twelve columns header-col">
                    <h1>
                        <span>Skills</span>
                    </h1>
                    {skillMessage && <p className="section-blurb">{skillMessage}</p>}
                    {skillGroups.map(({ key, items }) => (
                        <SkillGroup key={key} groupKey={key} items={items} />
                    ))}
                </div>
            </div>

            <div className="row skill">
                <div className="twelve columns header-col">
                    <h1>
                        <span>Tools</span>
                    </h1>
                    {toolsMessage && <p className="section-blurb">{toolsMessage}</p>}
                    {tools.length > 0 && <Pills items={tools} variant="tools" />}
                </div>
            </div>
        </Slide>
    );
};

export default Skill;
