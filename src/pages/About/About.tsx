import './styles.css'

const About = () => {
    return (
            <section id="about">
                <h2>About Me</h2>
                <div>
                    <figure>
                        <img className="myPix" src="/myPix.jpg" alt="A picture of me" />
                        <figcaption>Samir Idris <br /> Software Engineer</figcaption>
                        <button id="viewResume"><a href="https://drive.google.com/file/d/11G1CC_lACHDYSAScYctRg0zv7wPOJmIx/view?usp=sharing" target="_blank">View Resume</a></button>
                    </figure>
                    
                    <div>
                        <p>In early 2020, driven by curiosity and a profound appreciation for technology, I embarked on a transformative journey into the tech world, overcoming challenges in theoretical learning and battling procrastination by viewing them as valuable lessons. Navigating diverse tech education, I completed challenging courses, emphasizing hands-on practice.</p>
                        <p>As a Software Engineer, I embody a keen eye for detail, adaptability, and a commitment to continuous learning with a growth mindset. My skill set includes strong coding abilities, knowledge of computer algorithms, teamwork proficiency, and analytical reasoning.</p>
                        <p>Marked by dedication, discipline, and an unwavering determination, my goal is to create impactful software solutions, recognizing technology's potential for transformative change. Achievements in web development, project management, and DevOps underscore my technical proficiency and the capacity to drive efficiency and innovation within a team. Committed to the boundless potential of technology to enhance lives, I persist in this journey of growth and impact.</p>
                    </div>
                </div>
            </section>
    );
}

export default About;