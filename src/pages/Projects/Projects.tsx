import Project from './Project/Project';
import MyProjects from '../../static/projects';

import './styles.css'

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            {MyProjects &&
                MyProjects.map((myproject) => {
                    return (
                        <Project
                            key={myproject.p_head}
                            image_src={myproject.image_src}
                            p_head={myproject.p_head}
                            description={myproject.description}
                            tools={myproject.tools}
                            site_link={myproject.site_link}
                            github_link={myproject.github_link}
                        />
                    )
                })
            }
        </section>
    );
}

export default Projects;