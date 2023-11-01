import Project from './Project/Project';
import restaurant from '../../images/little_lemon_restaurant.jpg';
import MyProjects from '../../static/projects';

import './styles.css'

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            {
                MyProjects.map((myproject) => {
                    return (
                        <Project
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
            {/* <Project
                image_src={restaurant}
                p_head="Little Lemon Restaurant"
                description="Little Lemon Restaurant is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
                tools={["HTML", "CSS", "React"]}
                site_link="https://scisamir-little-lemon.vercel.app/"
                github_link="https://github.com/scisamir/meta-frontend-developer-capstone"
            /> */}
        </section>
    );
}

export default Projects;