import Project from './Project/Project';
import MyProjects from '../../static/projects';

import './styles.css'

const Projects = () => {
    const contributions = [
        {
            name: 'Minswap DEX',
            description: 'Refactored smart contracts to Plutus V3, integrated CIP-113 support, and contributed to protocol modernization.'
        },
        {
            name: 'FluidTokens',
            description: 'Contributed to NFT fractionalization infrastructure and related features.'
        },
        {
            name: 'Metera',
            description: 'Contributed to frontend development, integrations, and ecosystem tooling.'
        }
    ];

    return (
        <section id="projects" className="sectionPad lightSection">
            <div className="sectionHeading">
                <p className="eyebrow">Selected projects & major contributions</p>
                <h2>Work spanning protocol infrastructure, DEX modernization, indexes, education, and biotech research.</h2>
            </div>
            <div className="projectsGrid">
                {MyProjects &&
                    MyProjects.map((myproject) => {
                        return (
                            <Project
                                key={myproject.p_head}
                                image_src={myproject.image_src}
                                category={myproject.category}
                                p_head={myproject.p_head}
                                description={myproject.description}
                                tools={myproject.tools}
                                site_link={myproject.site_link}
                                github_link={myproject.github_link}
                            />
                        )
                    })
                }
            </div>
            <div className="contributions">
                <div>
                    <p className="eyebrow">Contributions</p>
                    <h3>Additional ecosystem contributions</h3>
                </div>
                <div className="contributionGrid">
                    {contributions.map((contribution) => (
                        <article key={contribution.name}>
                            <h4>{contribution.name}</h4>
                            <p>{contribution.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
