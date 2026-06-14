import { ProjectProps } from "./Project.type";
import { FiLink2 } from 'react-icons/fi'
import { AiFillGithub } from 'react-icons/ai'

import './styles.css'

const Project = ({
        image_src, p_head, category, description, tools, site_link, github_link
    }: ProjectProps) => {
    const projectInitials = p_head
        .split(' ')
        .slice(0, 2)
        .map((word) => word[0])
        .join('');

    return (
        <div className="projectCard">
            {image_src ? (
                <img className="projectImage" src={`/${image_src}`} alt={p_head} />
            ) : (
                <div className="projectVisual" aria-hidden="true">
                    <span>{projectInitials}</span>
                </div>
            )}
            <div className="projectDescription">
                {category && <p className="projectCategory">{category}</p>}
                <h2>{p_head}</h2>
                <p className="description">{description}</p>
                <div className="tools">
                    {
                        tools.map((tool: string) => {
                            return (<span key={tool}>{tool}</span>);
                        })
                    }
                </div>
                {(site_link || github_link) && (
                    <div className="projectButtons">
                        {site_link && (
                            <a className="projectButton" href={site_link} target="_blank" rel="noreferrer">
                                <FiLink2 /> Visit Site
                            </a>
                        )}
                        {github_link && (
                            <a className="projectButton githubBt" href={github_link} target="_blank" rel="noreferrer">
                                <AiFillGithub /> Github
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Project;
