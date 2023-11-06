import './styles.css'
import { AiFillHtml5 } from 'react-icons/ai';
import {
        BiLogoCss3,
        BiLogoReact,
        BiLogoJavascript,
        BiLogoTypescript,
        BiLogoPython,
        BiLogoAws,
        BiLogoTailwindCss,
        BiLogoBootstrap,
        BiLogoDocker,
        BiLogoKubernetes,
        BiLogoMongodb,
    } from 'react-icons/bi';
import { TbHexagonLetterC, TbSql,TbBrandNextjs } from 'react-icons/tb';
import { BsGit } from 'react-icons/bs';
import { SiGnubash, SiChakraui, SiAnsible, SiPrometheus } from 'react-icons/si';
import figma from '../../assets/figma.jpg';

const Experience = () => {
    return (
        <section id="experience">
            <h2>Tools and Technologies</h2>
             <div>
                <div className='exp'>
                    <BiLogoReact className="expIcon" color="#61dbfb" fontSize="4rem" />
                    <h3>React</h3>
                </div>
                <div className='exp'>
                    <BiLogoJavascript className="expIcon" color="#f0db4f" fontSize="4rem" />
                    <h3>JavaScript</h3>
                </div>
                <div className='exp'>
                    <BiLogoTypescript className="expIcon" color="#007acc" fontSize="4rem" />
                    <h3>TypeScript</h3>
                </div>
                <div className='exp'>
                    <AiFillHtml5 className="expIcon" color="#e34c26" fontSize="4rem" />
                    <h3>HTML</h3>
                </div>
                <div className='exp'>
                    <BiLogoCss3 className="expIcon" color="#264de4" fontSize="4rem" />
                    <h3>CSS</h3>
                </div>
                <div className='exp'>
                    <BiLogoTailwindCss className="expIcon" color="#61dbfb" fontSize="4rem" />
                    <h3>TailwindCSS</h3>
                </div>
            <div className='exp'>
                <img src={figma} alt="figma logo" style={{height: "3.6rem"}}/>
                <h3>Figma</h3>
            </div>
                <div className='exp'>
                    <BiLogoBootstrap className="expIcon" color="#563d7c" fontSize="4rem" />
                    <h3>BootStrap</h3>
                </div>
                <div className='exp'>
                    <SiChakraui className="expIcon" color="#61dbfb" fontSize="3.6rem" />
                    <h3>ChakraUI</h3>
                </div>
                <div className='exp'>
                    <TbHexagonLetterC className="expIcon" color="#888888" fontSize="4rem" />
                    <h3>C</h3>
                </div>
                <div className='exp'>
                    <BiLogoPython className="expIcon" color="#264de4" fontSize="4rem" />
                    <h3>Python</h3>
                </div>
                <div className='exp'>
                    <BiLogoAws className="expIcon" color="#264de4" fontSize="4rem" />
                    <h3>AWS</h3>
                </div>
                <div className='exp'>
                    <BiLogoDocker className="expIcon" color="#0db7ed" fontSize="4rem" />
                    <h3>Docker</h3>
                </div>
                <div className='exp'>
                    <BiLogoKubernetes className="expIcon" color="#296de8" fontSize="4rem" />
                    <h3>Kubernetes</h3>
                </div>
                <div className='exp'>
                    <SiAnsible className="expIcon" color="#1a1918" fontSize="3.6rem" />
                    <h3>Ansible</h3>
                </div>
                <div className='exp'>
                    <SiPrometheus className="expIcon" color="#ff4646" fontSize="3.6rem" />
                    <h3>Prometheus</h3>
                </div>
                <div className='exp'>
                    <SiGnubash className="expIcon" color="#293137" fontSize="4rem" />
                    <h3>Bash</h3>
                </div>
                <div className='exp'>
                    <BsGit className="expIcon" color="#f1502f" fontSize="4rem" />
                    <h3>Git</h3>
                </div>
                <div className='exp'>
                    <TbSql className="expIcon" color="#00758f" fontSize="4rem" />
                    <h3>SQL</h3>
                </div>
                <div className='exp'>
                    <BiLogoMongodb className="expIcon" color="#3fa037" fontSize="4rem" />
                    <h3>MongoDB</h3>
                </div>
                <div className='exp'>
                    <TbBrandNextjs className="expIcon" color="#495057" fontSize="4rem" />
                    <h3>NextJs</h3>
                </div>
            </div>
        </section>
    );
}

export default Experience;