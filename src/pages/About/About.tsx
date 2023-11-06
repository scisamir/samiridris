import './styles.css'

const About = () => {
    return (
            <section id="about">
                <h2>About Me</h2>
                <div>
                    <figure>
                        <img className="myPix" src="/myPix.jpg" alt="A picture of me" />
                        <figcaption>Samir Idris <br /> Software Engineer</figcaption>
                        <button id="viewResume">View Resume</button>
                    </figure>
                    
                    <div>
                        <h4>Part 1</h4>
                        <p>In early 2020, I embarked on a journey into the world of technology, driven by an insatiable curiosity for understanding the inner workings of systems and a profound appreciation for the transformative power of technology. My joy in problem-solving and bug-fixing has been my constant companion, and I've witnessed the boundless potential of creating value through technology.</p>
                        <p>Along this path, I've faced my share of challenges, including the pitfalls of learning without practical application, over-multitasking, and battling procrastination. These mistakes have been my greatest teachers. From freeCodeCamp to platforms like W3Schools, SoloLearn, LinkedIn Learning, and more, I've navigated the diverse landscape of tech education, completing various courses and dedicating time to hands-on practice
                        </p>
                        <p>In 2022, I embraced an ambitious undertaking, enrolling in the demanding 70-hour-per-week, 15-month ALX Software Engineering program alongside other intensive programs such as Udacity Cloud DevOps Engineering, HNGi9 Internship, and LinuxJobber Internship. Realizing the need for focus, I successfully completed the HNGi9 Internship (Frontend Track) and Udacity Cloud DevOps Engineering, later returning to the ALX Software Engineering program.
                        </p>
                        <p>This journey has been fueled by dedication, discipline, perseverance, consistency, and an unwavering determination. Looking ahead, my goal is to develop software solutions that enhance the lives of millions. With each step, I'm evolving as a technologist, driven by the belief that technology can bring about meaningful change. My experiences have shown me that learning is a lifelong endeavor, and I am excited about the path that lies ahead.
                        </p>

                        <h4 style={{marginTop: "50px"}}>Part 2</h4>
                        <p>In early 2020, I embarked on a journey into the world of technology, driven by an insatiable curiosity for
understanding the inner workings of systems and a profound appreciation for the transformative power of technology.
My joy in problem-solving and bug-fixing has been my constant companion, and I've witnessed the boundless potential
of creating value through technology.</p>
                        <p><span style={{display: "block", marginBottom: "10px"}}>Over the years, I have honed my skills and achieved significant milestones:</span>
                            <ul>
                                <li><span>Web Development:</span>
                                    <ul>
                                        <li>Designed components, wireframes, and prototypes with Figma.</li>
                                        <li>Crafted fully responsive webpages and websites using latest technologies and adhering to best practices.</li>
                                        <li>Implemented webpages and APIs on a large team project projected to generate more than 200k users in the first year.</li>
                                    </ul>
                                </li>
                                <li><span>Project Management:</span>
                                    <ul>
                                        <li>Successfully managed a 5-member cross-functional team, delivering a product in just 14 hours.</li>
                                    </ul>
                                </li>
                                <li><span>DevOps and Deployment:</span>
                                    <ul>
                                        <li>Implemented Deployment Strategies to streamline CI/CD pipelines, resulting in a 10x faster product delivery.</li>
                                        <li>Integrated a configuration management tool, slashing server deployment time by 10x.</li>
                                        <li>Surfaced critical server errors for diagnosis using centralized structured logging to cut down the time to response to downtime by 95%</li>
                                    </ul>
                                </li>
                            </ul>
                        </p>
                        <p>These accomplishments reflect not only my technical proficiency but also my ability to drive efficiency and innovation within a team. I believe in the limitless potential of technology to improve lives, and I am dedicated to continuing this journey of growth and impact.</p>
    
                    </div>
                </div>
            </section>
    );
}

export default About;