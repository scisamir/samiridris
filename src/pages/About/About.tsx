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
                        <p>In early 2020, I embarked on a transformative journey into the world of technology, driven by an insatiable curiosity to unravel the inner workings of systems and a profound appreciation for the profound impact of technology. From the outset, my joy in problem-solving and bug-fixing has been a constant companion, revealing to me the boundless potential of creating value through technology.</p>
                        <p>This journey has not been without its challenges, including learning without practical application, the pitfalls of over-multitasking, and the battle against procrastination. However, I've come to view these challenges as my greatest teachers. Navigating the diverse landscape of tech education, I completed various courses and dedicated time to hands-on practice, ranging from freeCodeCamp to platforms like W3Schools, SoloLearn, and LinkedIn Learning.</p>
                        <p>In 2022, I embraced an ambitious undertaking by enrolling in the rigorous ALX Software Engineering program, demanding 70 hours per week for 15 months, alongside other intensive programs such as Udacity Cloud DevOps Engineering, HNGi9 Internship, and LinuxJobber Internship. Recognizing the need for focus, I successfully completed the HNGi9 Internship (Frontend Track) and Udacity Cloud DevOps Engineering, before resuming the ALX Software Engineering program.</p>
                        <p>My journey has been fueled by dedication, discipline, perseverance, consistency, and an unwavering determination. Looking ahead, my goal is to develop software solutions that have a meaningful impact on the lives of millions. With each step, I'm evolving as a technologist, driven by the belief that technology can bring about transformative change.</p>
                        <p>Throughout the years, I've honed my skills and achieved significant milestones, ranging from web development where I've designed components, wireframes, and prototypes, to project management where I successfully led a 5-member cross-functional team to deliver a product in just 14 hours. In DevOps and deployment, I've implemented strategies that made product delivery 10 times faster and integrated configuration management tools for 10 times faster server deployment. I've also effectively used centralized structured logging to reduce response time to server errors by 95%.</p>
                        <p>These accomplishments reflect not only my technical proficiency but also my ability to drive efficiency and innovation within a team. I believe in the limitless potential of technology to improve lives, and I am committed to continuing this journey of growth and impact."</p>
                    </div>
                </div>
            </section>
    );
}

export default About;