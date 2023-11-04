import { ProjectProps } from "./Project.type";
import { FiLink2 } from 'react-icons/fi'
import { AiFillGithub } from 'react-icons/ai'

import './styles.css'

const Project = ({
        image_src, p_head, description, tools, site_link, github_link
    }: ProjectProps) => {
    return (
        <div className="project_card">
            <img className="project_image" src={`/${image_src}`} alt={p_head} />
            <div className="project_description">
                <h2>{p_head}</h2>
                <p className="description">{description}</p>
                <div className="tools">
                    {
                        tools.map((tool: string) => {
                            return (<span key={tool}>{tool}</span>);
                        })
                    }
                </div>
                <div className="project_buttons">
                    <a href={site_link} target="_blank">
                        <button><FiLink2 /> Visit Site</button>
                    </a>
                    <a href={github_link} target="_blank">
                        <button className="github_bt"><AiFillGithub /> Github</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project;