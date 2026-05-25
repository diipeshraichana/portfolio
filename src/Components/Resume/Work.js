import React, { useMemo } from "react";
import { Slide } from "react-reveal";

const flattenPositions = (work) => {
    const commits = [];
    (work || []).forEach((company) => {
        (company.positions || []).forEach((position) => {
            commits.push({
                company: company.company,
                branch: company.branch,
                ...position,
            });
        });
    });
    return commits;
};

const Refs = ({ commit, isHead }) => {
    const refs = [];
    if (isHead && commit.branch) {
        refs.push(
            <span key="head">
                <span className="t-head">HEAD -&gt; </span>
                <span className="t-branch">{commit.branch}</span>
            </span>
        );
    } else if (commit.isBranchTip && commit.branch) {
        refs.push(
            <span key="branch" className="t-branch">{commit.branch}</span>
        );
    }
    if (commit.tag) {
        refs.push(
            <span key="tag" className="t-tag">tag: {commit.tag}</span>
        );
    }
    if (refs.length === 0) return null;
    return (
        <>
            {" "}
            <span className="t-paren">(</span>
            {refs.map((ref, i) => (
                <React.Fragment key={i}>
                    {i > 0 && <span className="t-paren">, </span>}
                    {ref}
                </React.Fragment>
            ))}
            <span className="t-paren">)</span>
        </>
    );
};

const CommitBlock = ({ commit, isHead, isLast }) => {
    const rail = isLast ? " " : "|";
    return (
        <div className="t-commit">
            <div className="t-line">
                <span className="t-marker">*</span>
                <span className="t-text">
                    commit <span className="t-hash">{commit.hash}</span>
                    <Refs commit={commit} isHead={isHead} />
                </span>
            </div>
            <div className="t-line">
                <span className="t-rail">{rail}</span>
                <span className="t-text">
                    <span className="t-label">Date:</span>   {commit.years}
                </span>
            </div>
            <div className="t-line">
                <span className="t-rail">{rail}</span>
                <span className="t-text">&nbsp;</span>
            </div>
            <div className="t-line">
                <span className="t-rail">{rail}</span>
                <span className="t-text t-indent">
                    <span className="t-title">{commit.title}</span>
                    <span className="t-dim"> @ </span>
                    <span className="t-company">{commit.company}</span>
                </span>
            </div>
            {commit.stack && commit.stack.length > 0 && (
                <div className="t-line">
                    <span className="t-rail">{rail}</span>
                    <span className="t-text t-indent">
                        <span className="t-label">stack:</span>{" "}
                        {commit.stack.map((s, i) => (
                            <React.Fragment key={s}>
                                {i > 0 && <span className="t-dim"> · </span>}
                                <span className="t-stack">{s}</span>
                            </React.Fragment>
                        ))}
                    </span>
                </div>
            )}
            {Array.isArray(commit.highlights) && commit.highlights.length > 0 && (
                <>
                    <div className="t-line">
                        <span className="t-rail">{rail}</span>
                        <span className="t-text">&nbsp;</span>
                    </div>
                    {commit.highlights.map((h, i) => (
                        <div className="t-line" key={i}>
                            <span className="t-rail">{rail}</span>
                            <span className="t-text t-indent t-body">
                                <span className="t-bullet">• </span>
                                {h}
                            </span>
                        </div>
                    ))}
                </>
            )}
            {!commit.highlights && commit.summary && (
                <>
                    <div className="t-line">
                        <span className="t-rail">{rail}</span>
                        <span className="t-text">&nbsp;</span>
                    </div>
                    <div className="t-line">
                        <span className="t-rail">{rail}</span>
                        <span className="t-text t-indent t-body">{commit.summary}</span>
                    </div>
                </>
            )}
            {!isLast && (
                <div className="t-line">
                    <span className="t-rail">|</span>
                    <span className="t-text">&nbsp;</span>
                </div>
            )}
        </div>
    );
};

const Work = (props) => {
    const commits = useMemo(() => {
        const flat = flattenPositions(props.work);
        const seenBranches = new Set();
        flat.forEach((c) => {
            if (c.branch && !seenBranches.has(c.branch)) {
                c.isBranchTip = true;
                seenBranches.add(c.branch);
            }
        });
        return flat;
    }, [props.work]);

    if (commits.length === 0) return null;

    return (
        <Slide left duration={1300}>
            <div className="row work">
                <div className="three columns header-col">
                    <h1>
                        <span>Work</span>
                    </h1>
                </div>

                <div className="nine columns main-col">
                    <div className="terminal-window" role="region" aria-label="Career timeline as git log">
                        <div className="terminal-titlebar" aria-hidden="true">
                            <span className="terminal-dot red"></span>
                            <span className="terminal-dot yellow"></span>
                            <span className="terminal-dot green"></span>
                            <span className="terminal-title">diipesh@portfolio: ~/career — zsh</span>
                            <span className="terminal-spacer"></span>
                        </div>
                        <div className="terminal-body">
                            <div className="terminal-prompt">
                                <span className="t-user">diipesh</span>
                                <span className="t-at">@</span>
                                <span className="t-host">portfolio</span>
                                <span className="t-dim">:</span>
                                <span className="t-path">~/career</span>
                                <span className="t-dim"> $ </span>
                                <span className="t-cmd">git log --graph --decorate --all</span>
                            </div>
                            {commits.map((commit, idx) => (
                                <CommitBlock
                                    key={commit.hash}
                                    commit={commit}
                                    isHead={idx === 0}
                                    isLast={idx === commits.length - 1}
                                />
                            ))}
                            <div className="terminal-prompt" style={{ marginTop: "10px" }}>
                                <span className="t-user">diipesh</span>
                                <span className="t-at">@</span>
                                <span className="t-host">portfolio</span>
                                <span className="t-dim">:</span>
                                <span className="t-path">~/career</span>
                                <span className="t-dim"> $ </span>
                                <span className="t-cursor" aria-hidden="true"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    );
};

export default Work;
